
from flask import Flask, request, jsonify
from flask_cors import CORS  # To handle CORS issues with React
from langchain.vectorstores import Chroma
from langchain.embeddings import HuggingFaceEmbeddings
from transformers import pipeline
from typing import List, Dict
from langchain_community.document_loaders import CSVLoader

app = Flask(__name__)
CORS(app)  # Enable CORS

class EnhancedQASystem:
    def __init__(self, embedding_model: str = "all-MiniLM-L6-v2"):
        # Initialize embedding model
        self.embeddings = HuggingFaceEmbeddings(model_name=embedding_model)
        
        # Initialize summarization pipeline
        self.summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
        
        # Initialize vector store
        self.db = None  # Set to None initially

    def create_vector_store(self, text_documents: List, persist_dir: str = "./chroma_db"):
        """Create and persist vector store from documents."""
        text_list = [doc.page_content for doc in text_documents]
        self.db = Chroma.from_texts(
            texts=text_list,
            embedding=self.embeddings,
            persist_directory=persist_dir
        )
        
    def is_meaningful_query(self, query: str) -> bool:
        """Check if query contains relevant keywords."""
        keywords = [
            "money", "amount", "benefit", "welfare", "scheme", "program", 
            "eligibility", "applicable", "qualify", "assistance"
        ]
        return any(keyword in query.lower() for keyword in keywords)
    
    def summarize_text(self, text: str, max_length: int = 130, min_length: int = 30) -> str:
        """Generate a summary of the given text."""
        if len(text.split()) > 1024:
            text = " ".join(text.split()[:1024])
        
        summary = self.summarizer(text, max_length=max_length, min_length=min_length, do_sample=False)
        return summary[0]['summary_text']
    
    def process_query(self, query: str, k: int = 1) -> Dict:
        """Process query and return summaries of relevant documents."""
        if not self.is_meaningful_query(query):
            return {
                "status": "error",
                "message": "Query not meaningful. Please rephrase your question with more specific details about the scheme or benefit you're interested in."
            }
        
        if self.db is None:
            return {
                "status": "error",
                "message": "Vector store not initialized. Please create vector store first."
            }
        
        # Get similar documents
        results = self.db.similarity_search(query, k=k)
        
        if not results:
            return {
                "status": "error",
                "message": "No relevant information found for your query."
            }
        
        # Process results
        processed_results = []
        for result in results:
            # Get summary of the context
            summary = self.summarize_text(result.page_content)

            processed_results.append({
                "summary": summary,
                "full_text": result.page_content
            })

        return {
            "status": "success",
            "results": processed_results
        }

# Load the data and create the QA system instance
loader = CSVLoader("schemes_data - Sheet1.csv", encoding="utf-8")
text_documents = loader.load()
qa_system = EnhancedQASystem()
qa_system.create_vector_store(text_documents)  # Initialize the vector store

@app.route('/api/query', methods=['POST'])
def query():
    data = request.get_json()
    user_query = data.get("query")

    if not user_query:
        return jsonify({"status": "error", "message": "No query provided."}), 400

    # Log the incoming query to the console
    print(f"Received query: {user_query}")
    
    response = qa_system.process_query(user_query)

    # Log the response to the console
    print(f"Response: {response}")

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
