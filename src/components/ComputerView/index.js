import React from 'react'
import './index.css'

const ComputerView = ({currentQuestion, feedback}) => (
  <div className="computer-container">
    <h2>Current Question</h2>
    <h3>{currentQuestion.question}</h3>
    <div className="options-container">
      {Object.keys(currentQuestion.options).map(key => (
        <p key={key}>
          {key}: {currentQuestion.options[key]}
        </p>
      ))}
    </div>
    <p className="feedback">{feedback}</p>
  </div>
)

export default ComputerView
