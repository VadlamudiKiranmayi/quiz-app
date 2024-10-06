import React from 'react';
import './index.css';

const MobileView = ({
  playerName,
  setPlayerName,
  currentQuestion,
  onAnswerSubmit,
  feedback,
}) => {
  const handleChange = e => {
    setPlayerName(e.target.value);
  };

  return (
    <div className="mobile-container">
      <h2>Welcome {playerName ? playerName : 'Player'}!</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={playerName}
        onChange={handleChange}
        className="name-input"
      />
      <h3>{currentQuestion.question}</h3>
      <div className="options-container">
        {Object.keys(currentQuestion.options).map((key) => (
          <button
            key={key}
            className="option-button"
            onClick={() => onAnswerSubmit(key)}
          >
            {key}: {currentQuestion.options[key]}
          </button>
        ))}
      </div>
      <p className="feedback">{feedback}</p>
    </div>
  );
};

export default MobileView;