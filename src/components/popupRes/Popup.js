// src/components/popup/Popup.js

import React from "react";
import "./Popup.scss";

const Popup = ({ isOpen, onClose, onAction1, onAction2 }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="popup-content">
          <h2>Do you want to continue?</h2>
          <div className="popup-buttons">
            <button className="popup-btn" onClick={onAction1}>
              Action 1
            </button>
            <button className="popup-btn" onClick={onAction2}>
              Action 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
