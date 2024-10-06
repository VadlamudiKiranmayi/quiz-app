import React, {useState} from 'react'
import ComputerView from './ComputerView'
import MobileView from './MobileView'

const questions = [
  {
    question: 'Which animal is known as the "King of the Jungle"?',
    options: {A: 'Tiger', B: 'Elephant', C: 'Lion', D: 'Gorilla'},
    answer: 'C',
  },
  {
    question: 'What is the boiling point of water at sea level?',
    options: {A: '50°C', B: '100°C', C: '150°C', D: '200°C'},
    answer: 'B',
  },
  {
    question: 'Which planet is closest to the Sun?',
    options: {A: 'Venus', B: 'Earth', C: 'Mercury', D: 'Mars'},
    answer: 'C',
  },
  {
    question: 'What is the largest continent on Earth?',
    options: {A: 'Africa', B: 'Asia', C: 'North America', D: 'Antarctica'},
    answer: 'B',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: {
      A: 'Vincent van Gogh',
      B: 'Pablo Picasso',
      C: 'Leonardo da Vinci',
      D: 'Claude Monet',
    },
    answer: 'C',
  },
]

const Game = ({isMobile}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [playerName, setPlayerName] = useState('')
  const [feedback, setFeedback] = useState('')

  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswerSubmit = answer => {
    if (answer === currentQuestion.answer) {
      setFeedback(`Congratulations! ${playerName} answered correctly.`)
      setTimeout(() => {
        setFeedback('')
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
          alert('Game Over! Thanks for playing!')
        }
      }, 2000)
    } else {
      setFeedback('Incorrect answer. Try again!')
    }
  }

  return isMobile ? (
    <MobileView
      playerName={playerName}
      setPlayerName={setPlayerName}
      currentQuestion={currentQuestion}
      onAnswerSubmit={handleAnswerSubmit}
      feedback={feedback}
    />
  ) : (
    <ComputerView currentQuestion={currentQuestion} feedback={feedback} />
  )
}

export default Game
