# Indroyd Assignment: React Quiz Game

## Overview

This project is a React-based single-page application (SPA) that simulates a quiz game, inspired by the famous "Kaun Banega Crorepati" (KBC) format. The game consists of a series of questions with multiple-choice answers, allowing players to join via a QR code displayed on the computer screen.

## Features

- **Player Join**: Players can join the game by scanning a QR code.
- **Question Display**: Current questions and answer options are displayed on both computer and mobile screens.
- **Answer Submission**: Players can submit their answers from the mobile interface.
- **Answer Validation**: Correct and incorrect answers are validated, with feedback provided to players.
- **Game Progression**: The game advances to the next question once a player answers correctly.
- **Completion Summary**: A summary message is displayed at the end of the game.

## Technologies Used

- React
- React Hooks (`useState`, `useEffect`)
- QR Code generation using `qrcode.react`
