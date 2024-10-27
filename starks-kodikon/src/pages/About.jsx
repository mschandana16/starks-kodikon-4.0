import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Empowering citizens with the right welfare information</p>
      </div>
      
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to bridge the gap between government welfare schemes and the citizens who need them most. 
          We believe that everyone deserves access to support systems designed for their benefit, but many individuals 
          face barriers in finding and understanding these resources. Our chatbot is designed to make this process seamless, 
          personalized, and user-friendly.
        </p>
        
        <h2>Why We Built This Platform</h2>
        <p>
          Navigating government schemes can be overwhelming, especially for those unfamiliar with bureaucratic processes.
          We created this platform to serve as a guide—helping users quickly identify the welfare schemes they qualify for, 
          while also providing clear instructions on the application process and eligibility criteria.
        </p>

        <h2>How Our Chatbot Works</h2>
        <p>
          Our intelligent chatbot leverages AI and data analytics to interact with users, ask the right questions, 
          and generate tailored recommendations. By analyzing user inputs, it can provide detailed information about 
          various schemes, including eligibility, benefits, required documentation, and application steps. 
          With a focus on clarity and simplicity, we aim to help users take informed steps toward receiving the support they deserve.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li><strong>Inclusivity:</strong> We strive to create a platform that is accessible and helpful for people from all walks of life.</li>
          <li><strong>Transparency:</strong> We prioritize clear and accurate information, ensuring that users can trust the guidance provided.</li>
          <li><strong>Empowerment:</strong> Our platform empowers individuals to take control of their welfare choices, making it easier to access resources for a better quality of life.</li>
          <li><strong>Continuous Improvement:</strong> We are committed to continually enhancing our chatbot’s capabilities based on user feedback and evolving technology.</li>
        </ul>

        <h2>Looking Forward</h2>
        <p>
          As we grow, we plan to expand our reach, incorporating more languages and localized information to better serve 
          diverse communities. We are excited to introduce new features that will further simplify welfare access 
          and empower users across regions to benefit from the resources they deserve.
        </p>

        <h2>Join Us on Our Journey</h2>
        <p>
          We're always looking for ways to improve and would love to hear from you! If you have feedback, questions, 
          or suggestions, please feel free to reach out. Join us on our mission to create a fairer, more supportive society.
        </p>

        <button className="back-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </section>
  );
}

export default About;
