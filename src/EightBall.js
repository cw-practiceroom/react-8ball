import './EightBall.css';
import React, { useState } from 'react';
import answers from './answers';

// EightBall returns a random answer when button is clicked

const EightBall = () => {
  let randInd = () => Math.floor(Math.random() * answers.length);

  const askQuestion = () => {
    let index = randInd();
    setText(answers[index].msg);
    setColor(answers[index].color);
  };

  const [color, setColor] = useState('black');
  const [text, setText] = useState('Ask a question!');

  return (
    <div className="EightBall">
      <h1>8 ball</h1>
      <div className="EightBall-ball" style={{ backgroundColor: color }}>
        <p className="EightBall-text">{text}</p>
      </div>
      <button className="EightBall-button" onClick={askQuestion}>
        Answer
      </button>
    </div>
  );
};

export default EightBall;
