# Tic Tac Toe

This repo is a front-end part of the application. The back-end part can be found [here](https://github.com/andrewvitrenko/tic-tac-toe-backend).

## Introduction

Tic-tac-toe is a simple, two-player game that, if played optimally by both
players, will always result in a tie. The game is also called noughts and
crosses or Xs and Os.

## Rules

The game is played on a 3x3 grid. One player is X and the other player is O.
Players take turns placing their X or O. If a player gets three of their marks
on the grid in a row, column, or one of the two diagonals, they win. When the
grid is full and no player has won, the game is a tie.

## Installation

### Requirements

- [Node.js](https://nodejs.org/en/download/), LTS version or higher
- Modern browser: Chrome, Firefox, Safari, Edge

### Instructions

1. Clone the repository:
2. Install dependencies:
   ```bash
   npm ci
   ```
   This will install all dependencies from the `package-lock.json` file.
3. Add `.env` file with variable `NEXT_PUBLIC_API_URL` that contains the URL of
   the back-end part of the application.
4. Build the project:
   ```bash
   npm run build
   ```
5. Start the project:
   ```bash
   npm start
   ```
6. Open the project in your
   browser: [http://localhost:3000](http://localhost:3000)

### User flow

1. Open the application in your browser.
2. You will be redirected to login page if you are not logged in.
3. Register if you don't have an account.
4. At home page you can see two buttons: "Create game" and "Join game".
5. Click "Create game" to create a new game.
6. Click "Join game" to join an existing game.
7. If you are a creator of the game, you will see a modal with a code to share
   with your opponent.
8. If you are a joiner, you will see a modal with an input to enter the code.
9. After entering the code, you will be redirected to the game page.
10. The game page contains a 3x3 grid and a chat.
11. The game starts when both players are on the game page.
12. Players take turns placing their X or O on the grid.
13. If a player wins or grid is full, the game is over.
14. You will see the modal that informs you about the result of the game.
15. You can create a new game and play again.

## Technologies used

### Basics

This application is built on the [Next.js](https://nextjs.org) framework. It was
chosen and most
suitable solution for displaying dynamic content. Because the game does not have
and moving objects or complex graphics, there was no need to pick a gaming
framework to build the game.

### UI

To establish a nice, user-friendly and easily customizable UI, I picked
a [Shadcn](https://ui.shadcn.com/) UI library
with [Tailwind](https://tailwindcss.com/) under the hood. This setup allows me
to create a responsive design with minimal effort.

### Store

As for store [Zustand](https://github.com/pmndrs/zustand) was chosen. It is a
small, fast and scalable state manager,
and a good ally when it comes to optimizing re-rendering.

### API

To communicate with the back-end part of the application, I
used [axios](https://axios-http.com/docs/intro) library
with [socket-io](https://socket.io/). This combination gave me the ability to
manage regular HTTP
requests and web sockets for instant bidirectional communication.
