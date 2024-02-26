import React from 'react';
import './Popup.css';

const Popup = ({ closePopup, colors, handleColorChange }) => {
    const defaultFontColor = '#444444';
    const defaultbgColor = '#FFFFFF';
    const buttonColor = '#2072EF';
    const buttonBorderColor = '#2072EF';
    const buttonMouseoverColor = '#0053D1';

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('popup')) {
      closePopup();
    }
  };

  return (
    <div className="popup" onClick={handleOutsideClick}>
      <div className="popup-content">
        <div className="Header">
          <h4>Theme Color</h4>
          <h4 className='ch-theme'>Change Theme</h4>
        </div>
        <div className='label-container'>
          <div>
            <label>
              <span>Font Color</span>
              <span className="color-value">{colors.fontColor || defaultFontColor}</span>
              <input
                type="color"
                value={colors.fontColor || defaultFontColor}
                onChange={(e) => handleColorChange('fontColor', e.target.value)}
              />
            </label>
          </div><hr className="line" />
          <div>
            <label>
              <span>Background Color</span>
              <span className="color-value">{colors.bgColor || defaultbgColor}</span>
              <input
                type="color"
                value={colors.bgColor || defaultbgColor}
                onChange={(e) => handleColorChange('bgColor', e.target.value)}
              />
            </label>
          </div><hr className="line" />
          <div>
            <label>
              <span>Button Color</span>
              <span className="color-value">{colors.btnColor || buttonColor}</span>
              <input
                type="color"
                value={colors.btnColor || buttonColor}
                onChange={(e) => handleColorChange('btnColor', e.target.value)}
              />
            </label>
          </div><hr className="line" />
          <div>
            <label>
              <span>Button Border Color</span>
              <span className="color-value">{colors.btnBorderColor || buttonBorderColor}</span>
              <input
                type="color"
                value={colors.btnBorderColor || buttonBorderColor}
                onChange={(e) => handleColorChange('btnBorderColor', e.target.value)}
              />
            </label>
          </div><hr className="line" />
          <div>
            <label>
              <span>Buttons Mouseover Color</span>
              <span className="color-value">{colors.btnMouseoverColor || buttonMouseoverColor}</span>
              <input
                type="color"
                value={colors.btnMouseoverColor || buttonMouseoverColor}
                onChange={(e) => handleColorChange('btnMouseoverColor', e.target.value)}
              />
            </label>
          </div><hr className="line" />
        </div>
        <div className="button-container">
          <button className="cancel-button" onClick={closePopup}>
            Cancel
          </button>
          <button className="save-button" onClick={closePopup}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
