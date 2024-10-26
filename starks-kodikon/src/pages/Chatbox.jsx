// import React, { useState } from "react";
// import "./Chatbox.css";
// import NameCarousel from "../components/NameCarousel";

// function Chatbox() {
//   const [messages, setMessages] = useState([
//     { text: "Hi! Please tell us what you would like to know", sender: "bot" },
//   ]);
//   const [input, setInput] = useState("");

//   const handleSend = async () => {
//     if (input.trim()) {
//       const userMessage = { text: input, sender: "user" };
//       setMessages((prevMessages) => [...prevMessages, userMessage]);

//       // Send user input to Flask backend
//       try {
//         const response = await fetch("http://127.0.0.1:5000/api/query", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ query: input }),
//         });

//         const data = await response.json();

//         // Check for success response
//         if (data.status === "success") {
//           const formattedResponse = formatFullText(data.results[0].full_text);

//           // Add bot response to the chat
//           setMessages((prevMessages) => [
//             ...prevMessages,
//             { text: formattedResponse, sender: "bot" },
//           ]);
//         } else {
//           // Handle error response
//           setMessages((prevMessages) => [
//             ...prevMessages,
//             { text: data.message, sender: "bot" },
//           ]);
//         }
//       } catch (error) {
//         console.error("Error fetching response:", error);
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { text: "Error: Could not reach the server.", sender: "bot" },
//         ]);
//       }

//       setInput(""); // Clear input field
//     }
//   };

//   const formatFullText = (fullText) => {
//     const sections = {};
    
//     // Split the fullText by new lines and parse into sections
//     const lines = fullText.split('\n').map(line => line.trim());
//     lines.forEach(line => {
//       if (line.includes('scheme_name:')) {
//         sections.scheme_name = line.replace('scheme_name:', '').trim();
//       } else if (line.includes('details:')) {
//         sections.details = line.replace('details:', '').trim();
//       } else if (line.includes('benefits:')) {
//         sections.benefits = line.replace('benefits:', '').trim();
//       } else if (line.includes('eligibility:')) {
//         sections.eligibility = line.replace('eligibility:', '').trim();
//       } else if (line.includes('app_process:')) {
//         sections.app_process = line.replace('app_process:', '').trim();
//       } else if (line.includes('docs_reqd:')) {
//         sections.docs_reqd = line.replace('docs_reqd:', '').trim();
//       } else if (line.includes('url:')) {
//         sections.url = line.replace('url:', '').trim();
//       }
//     });

//     // Format response for display
//     return `
//       <strong>Scheme Name:</strong> ${sections.scheme_name}<br />
//       <strong>Details:</strong> ${sections.details}<br />
//       <strong>Benefits:</strong> ${sections.benefits}<br />
//       <strong>Eligibility:</strong> ${sections.eligibility}<br />
//       <strong>Application Process:</strong> ${sections.app_process}<br />
//       <strong>Documents Required:</strong> ${sections.docs_reqd}<br />
//       <strong>Apply here:</strong> <a href="${sections.url}" target="_blank" rel="noopener noreferrer">${sections.url}</a>
//     `;
//   };

//   return (
//     <div>
//       <NameCarousel />
//       <section className="chatbox">
//         <h3>Chat with Us</h3>
//         <div className="chat-history">
//           {messages.map((message, index) => (
//             <div key={index} className={`message ${message.sender}`}>
//               {message.sender === "bot" ? (
//                 <div dangerouslySetInnerHTML={{ __html: message.text }} />
//               ) : (
//                 message.text
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="chat-input-area">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message here..."
//           />
//           <button onClick={handleSend}>Send</button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Chatbox;

import React, { useState } from "react";
import "./Chatbox.css";
import NameCarousel from "../components/NameCarousel";

function Chatbox() {
  const [messages, setMessages] = useState([
    { text: "Hi! Please tell us what you would like to know", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Send user input to Flask backend
      try {
        const response = await fetch("http://127.0.0.1:5000/api/query", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: input }),
        });

        const data = await response.json();

        // Check for success response
        if (data.status === "success") {
          const formattedResponse = formatFullText(data.results[0].full_text);

          // Add bot response to the chat
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: formattedResponse, sender: "bot" },
          ]);
        } else {
          // Handle error response
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: data.message, sender: "bot" },
          ]);
        }
      } catch (error) {
        console.error("Error fetching response:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Error: Could not reach the server.", sender: "bot" },
        ]);
      }

      setInput(""); // Clear input field
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default behavior (like new line)
      handleSend();
    }
  };

  const formatFullText = (fullText) => {
    const sections = {};
    
    // Split the fullText by new lines and parse into sections
    const lines = fullText.split('\n').map(line => line.trim());
    lines.forEach(line => {
      if (line.includes('scheme_name:')) {
        sections.scheme_name = line.replace('scheme_name:', '').trim();
      } else if (line.includes('details:')) {
        sections.details = line.replace('details:', '').trim();
      } else if (line.includes('benefits:')) {
        sections.benefits = line.replace('benefits:', '').trim();
      } else if (line.includes('eligibility:')) {
        sections.eligibility = line.replace('eligibility:', '').trim();
      } else if (line.includes('app_process:')) {
        sections.app_process = line.replace('app_process:', '').trim();
      } else if (line.includes('docs_reqd:')) {
        sections.docs_reqd = line.replace('docs_reqd:', '').trim();
      } else if (line.includes('url:')) {
        sections.url = line.replace('url:', '').trim();
      }
    });

    // Format response for display
    return `
      <strong>Scheme Name:</strong> ${sections.scheme_name}<br />
      <strong>Details:</strong> ${sections.details}<br />
      <strong>Benefits:</strong> ${sections.benefits}<br />
      <strong>Eligibility:</strong> ${sections.eligibility}<br />
      <strong>Application Process:</strong> ${sections.app_process}<br />
      <strong>Documents Required:</strong> ${sections.docs_reqd}<br />
      <strong>Apply here:</strong> <a href="${sections.url}" target="_blank" rel="noopener noreferrer">${sections.url}</a>
    `;
  };

  return (
    <div>
      <NameCarousel />
      <section className="chatbox">
        <h3>Chat with Us</h3>
        <div className="chat-history">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.sender === "bot" ? (
                <div dangerouslySetInnerHTML={{ __html: message.text }} />
              ) : (
                message.text
              )}
            </div>
          ))}
        </div>
        <div className="chat-input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown} // Add this line to handle key down
            placeholder="Type your message here..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </section>
    </div>
  );
}

export default Chatbox;
