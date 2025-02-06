import React from 'react';
import './Popup.scss';
import { greeting} from "../../portfolio";
import Button from "../../components/button/Button";
const Popup = ({ closePopup }) => {
  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Download Resume</h2>
        <div className="button-container">
        {greeting.ML_resumeLink && (
                  <a
                    href={greeting.ML_resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    // download="Resume.pdf"
                    className="download-link-button"
                  >
               <Button text={<span>ML📥</span>} />
                  </a>
                )}{greeting.EC_resumeLink && (
                  <a
                    href={greeting.EC_resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    // download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="EC📥" />
                  </a>
                )}{greeting.SDE_resumeLink && (
                  <a
                    href={greeting.SDE_resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    // download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="SDE📥" />
                  </a>
                )}

        </div>
        {/* <button className="close-btn" onClick={closePopup}>Close</button> */}
      </div>
    </div>
  );
};

export default Popup;
