// src/components/Carousel.js
import React, { useState } from "react";
import Papa from "papaparse";
import "./Carousel.css";

const Carousel = () => {
  const [schemes, setSchemes] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const data = result.data.map((row) => ({
            scheme_name: row.scheme_name,
            url: row.url,
          }));
          setSchemes(data);
        },
      });
    }
  };

  return (
    <div className="carousel-container">
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <div className="carousel">
        {schemes.map((scheme, index) => (
          <div className="placard" key={index}>
            <h3>{scheme.scheme_name}</h3>
            <a href={scheme.url} target="_blank" rel="noopener noreferrer">
              Visit Scheme
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
