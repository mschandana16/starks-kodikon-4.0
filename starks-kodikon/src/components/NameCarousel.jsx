import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "../styles/NameCarousel.css";

function NameCarousel() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Load CSV data from the public folder
    Papa.parse("/data/name_url_data.csv", {
      // Ensure correct path
      download: true,
      header: true,
      complete: (results) => {
        console.log("Parsed CSV data:", results.data); // Optional: Log the parsed data
        setItems(results.data);
      },
      error: (error) => {
        console.error("Error loading CSV file:", error);
      },
    });
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NameCarousel;
