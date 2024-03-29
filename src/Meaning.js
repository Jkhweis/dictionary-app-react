import React from 'react';
import Synonyms from './Synonyms';
import './Meaning.css';

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="text-capitalize">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              {' '}
              <strong>{definition.definition}</strong>
            </div>
            <div className="example">
              <em> {definition.example}</em>{' '}
            </div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
