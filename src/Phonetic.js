import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="audio-link"
        title="Audio Playback Icon"
      >
        <i className="fas fa-volume-up"></i>
      </a>
      <br />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
