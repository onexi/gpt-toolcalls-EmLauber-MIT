[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/9wDnMTRl)
# FunctionAgents
Call Function from LLM

# Project ReadMe

## Overview

This project is a web-based app integrating functions such as pulling tarot cards, determining if the user is like a frog or toad, and managing memories with a scratchpad. It uses **Node.js Express** for the backend and **HTML/JavaScript** for the frontend. OpenAI’s API with function calling dynamically handles user input.

---

## Project Structure

### Files:

- **server.js**: Backend logic that manages API calls, handles user inputs, and triggers functions based on user queries.
  
- **index.html**: The frontend interface where users can input prompts to interact with the assistant, prompting functions like tarot reading and animal comparisons.
  
- **frogs_and_toads.js**: Decides randomly if the user is more like a frog or a toad and gives a fun, descriptive result.
  
- **tarot.js**: A tarot card pulling function that selects a random card from a pre-defined deck and returns the card name and meaning.

---

## Server (server.js)

Handles requests from the frontend, dynamically selecting the appropriate function to call based on user inputs like “tell me my fortune” (calls the fortune function) or “am I like a frog or a toad?” (calls the frog or toad function).

### Key Features:
- Uses OpenAI API with function calling.
- Routes to different functions like scratchpad, frogs_and_toads, and tarot based on user requests.

---


## Frogs and Toads (frogs_and_toads.js)

- **Key Features**:
  - Fun function that determines randomly whether the user is more like a frog or toad.
  - Provides playful descriptions of the animal’s characteristics.
  
---

## Fortune Telling (fortune.js)

- **Key Features**:
  - Randomly selects a tarot card from a deck of 22 major arcana cards to provide the user their fortune.
  - Returns the name of the card along with its meaning when the user asks for their fortune or to pull a card.
  
---

## How to Use

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the server: `node server.js`.
4. Access the app through your browser at `http://localhost:3000`.
5. Use the input field to type commands such as “pull a tarot card” or “tell me my fortune.”

---

## Dependencies

- **Node.js**: For the backend server.
- **Express.js**: To handle requests and routing.
- **OpenAI API**: For function calling.
