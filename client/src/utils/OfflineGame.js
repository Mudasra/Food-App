import React from "react";

const OfflineGame = () => {
  return (
    <div className="offline-wrapper">
      <h2>Wait until you get back online</h2>

      <iframe
        title="Dino Game"
        src="https://dino-chrome.com/"
        className="dino-frame"
        frameBorder="0"
      ></iframe>
    </div>
  );
};



export default OfflineGame;


