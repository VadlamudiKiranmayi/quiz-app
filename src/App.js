import React, {useState} from 'react'
import Game from './components/Game'
import QRCodeDisplay from './components/QRCodeDisplay'
import './App.css'

const App = () => {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className="app-container">
      {isMobile ? (
        <Game isMobile />
      ) : (
        <QRCodeDisplay setIsMobile={setIsMobile} />
      )}
    </div>
  )
}

export default App
