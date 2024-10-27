// src/pages/Services.js
import React from "react";
import './Services.css'
function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Empowering users with easy access to welfare schemes and legal support</p>
      </div>

      <div className="services-content">
        <h2>Scheme Identification</h2>
        <p>
          Our platform analyzes user responses to identify welfare schemes that best match individual needs. 
          Through our AI-powered chatbot, we aim to make it easy for users to find the right welfare opportunities 
          that they qualify for, without unnecessary complexity.
        </p>

        <h2>Detailed Scheme Information</h2>
        <p>
          We offer comprehensive information on each welfare scheme, including eligibility criteria, benefits, required 
          documentation, and application processes. This allows users to understand the specific steps they need to take 
          for each scheme.
        </p>

        <h2>Application Guidance</h2>
        <p>
          Our chatbot provides step-by-step guidance on how to apply for various schemes. From document preparation to 
          form submission, we simplify the application process, reducing potential confusion or missed details.
        </p>

        <h2>Legal Advisory Support</h2>
        <p>
          For users seeking additional support or advice, our platform provides access to legal advisory services. We connect 
          users with verified legal professionals who can offer advice on welfare schemes and other legal matters.
        </p>

        <h2>Real-Time Updates</h2>
        <p>
          We stay up-to-date with changes in government policies and welfare programs, ensuring our users have access to 
          current and accurate information. Notifications and updates help users stay informed about new schemes or changes 
          to existing ones.
        </p>
      </div>
    </section>
  );
}

export default Services;
