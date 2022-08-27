import React from 'react';
import './Phonetic.css';

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);

  const start = () => {
    audio.play();
  };

  return (
    <div className="Phonetic">
      <button onClick={start} className="audio-link">
        <i className="fas fa-volume-up"></i>
      </button>

      <br />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
