import React from 'react'
import {QRCodeSVG} from 'qrcode.react'
import './index.css'

const QRCodeDisplay = ({setIsMobile}) => {
  const handleScan = () => {
    setIsMobile(true)
  }

  return (
    <div className="qr-container">
      <h1>Scan the QR Code to Join the Game</h1>
      <QRCodeSVG value="http://localhost:3000" />
      <p>Or click below to join:</p>
      <button className="join-button" onClick={handleScan}>
        Join Game
      </button>
    </div>
  )
}

export default QRCodeDisplay
