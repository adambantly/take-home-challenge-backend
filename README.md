# Mapistry Backend Take Home Challenge

## The challenge

This project is a partially completed client/server tic-tac-toe game. Your mission will be to complete the code and produce a working game.

## The rules

- An ideal solution will allow for 2 difficulty levels - easy and unbeatable.
- This is an open book/notes challenge. Feel free to search and lookup anything that you think will help you to complete the challenge. Treat this as if it was a ticket you were given rather than a test.
- We anticipate you spending approximately 3 - 4 hours to complete the challenge. If you haven't completed the challenge in that amount of time please commit what you have and explain in the commit message where you left off and what steps remain. Pretend you are leaving on vacation and you need to pass off your work to a teammate.
- We will discuss your solution in a follow up call. Be prepared to talk through the choices and tradeoffs you have made. If you don't finish implementing the hard mode, leave notes (or maybe pseudo code) on how you would have gone about it and we can discuss.
- While we are providing a testing framework you are not required to use it. If tests help you in your development process feel free to use any framework you'd like.
- An ideal solution will implement 2 endpoints (provided):
  - Begin a new game with the computer optionally taking the first turn
  - Accept a board and difficulty level and returning a board and win status with the computer having taken an addition turn if necessary

## What we are providing

This project has a fully working UI that accepts a `GameStatus` object and will allow you to play the game. It will call the 2 endpoints you are meant to implement when the controls are manipulated.

## Delivery

Please create a branch called `yourName/backend_tictactoe` (insert your name appropriately ;)) and open a pull request against the `main` branch of this repository with your work. Treat it like any pull request you would open at work.

## Additional info

Branch: https://github.com/Mapistry/take-home-challenge/tree/backend-challenge

The majority of code has been removed from 3 files:

- [ai.ts](https://github.com/Mapistry/take-home-challenge/blob/backend-challenge/packages/server/src/ai.ts)
- [endGame.ts](https://github.com/Mapistry/take-home-challenge/blob/backend-challenge/packages/server/src/endGame.ts)
- [game.ts](https://github.com/Mapistry/take-home-challenge/blob/backend-challenge/packages/server/src/game.ts)

The function prototypes have been left behind to give some guidance and because the tests and/or other bits of code call them that way. Feel free to change whatever you'd like to suit how you'd solve the problem.

> Reminder: You may use either JavaScript or TypeScript to complete the solution. Please use whatever language you are most comfortable with. We will not give preference to either language choice.
