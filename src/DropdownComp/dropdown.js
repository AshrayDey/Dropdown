import React, { useState } from "react";
import styles from "./dropdown.module.scss";
import imageSrc from "./image.png"; // Import the image

export const Dropdown = ({ array }) => {
  // State to manage the open/closed state of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Handler for option click to close the dropdown
  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Dropdown container with hover events */}
      <div className={styles.dropdown} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        {/* Button to trigger the dropdown */}
        <button>
          Dropdown <img src={imageSrc} alt="V" />
        </button>
        {/* Dropdown content */}
        <ul className={styles.content} style={{ display: isOpen ? "block" : "none" }}>
          {/* Dropdown options with click event to close dropdown */}
          {array.map((item) => (
            <li key={item} onClick={handleOptionClick}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
