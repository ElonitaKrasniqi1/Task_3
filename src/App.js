import React, { useState } from 'react';
import './App.css';
import Popup from './Popup';

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState({
    themeColor: '',
    fontColor: '',
    bgColor: '',
  });

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleColorChange = (type, color) => {
    setSelectedColors((prevColors) => ({ ...prevColors, [type]: color }));
  };

  return (
    <div className="App">
      <div className='btn-container'>
        <button className="show-popup-button" onClick={openPopup}>
          Show Popup
        </button>
      </div>

      {isPopupOpen && (
        <Popup
          closePopup={closePopup}
          colors={selectedColors}
          handleColorChange={handleColorChange}
        />
      )}
    </div>
  );
}

export default App;
