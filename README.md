
# 🎲 React Dice Game

![Game Screenshot](./src/assets/Screenshot%202024-09-21%20001511.png)

## Instructions:
- Select a number between 1 and 6.
- Click on the dice image to roll.
- If the dice number matches your selected number, you get points equal to the dice value.
- If your guess is incorrect, 2 points will be deducted.

---

## Tech Stack:
- React JS
- React Router DOM

🌐 Access the live version here ➡️ [Dice Game](https://dice-game-nhui.onrender.com/)

---

## 🎯 Technical Specifications

### Features:
1. **User Interaction:**
   - Users can select a number from 1 to 6.
   - When the dice is clicked, it rolls to a random number.
   - Points are awarded for correct guesses or deducted for incorrect guesses.
   - The game updates the UI dynamically with every roll and guess.

2. **Dice Animation:**
   - The dice image rotates with a CSS animation to simulate a roll.

3. **Score Management:**
   - Correct guesses increase the score, while incorrect guesses reduce it by 2 points.

---

## UI Components:

1. **Header Component:**
   - Displays the current score and selected number.

2. **Dice Component:**
   - Displays a clickable dice image with animation.
   - Updates its value dynamically on click.

3. **Number Selection Component:**
   - Users can select a number from 1 to 6, which is visually highlighted upon selection.

---

## **Core Logic and Technologies:**

1. **State Management (React Hooks):**
   - `useState` is used for managing the dice value, user guess, and score.
   - `useEffect` is used to handle the dice roll logic after each click.

2. **Random Number Generation:**
   - `Math.random()` is used to generate a number between 1 and 6.

3. **CSS Animations:**
   - The dice image rotates using a CSS `@keyframes` animation to simulate rolling.

---

## 🛠 How to Download and Run the Project

### Prerequisites:
- Node.js and npm (Node Package Manager) must be installed.

### Steps:

1. **Clone the Repository:**
   ```
   git clone <REPOSITORY_URL>
   ```

2. **Navigate to the Project Directory:**
   ```
   cd <your-project-directory>
   ```

3. **Install Dependencies:**
   ```
   npm install
   ```

4. **Run the Development Server:**
   ```
   npm start
   ```

   This will open the project at `http://localhost:3000/` by default.

5. **Build for Production:**
   ```
   npm run build
   ```

   This will create a production build in the `/build` folder.

---

## Folder Structure:
- `/src`: Contains all the source code.
  - `/components`: Reusable UI components.
  - `/assets`: Static assets such as images.
  - `/styles`: CSS files.
- `/public`: Public static files.

---

Feel free to fork the repo and contribute!  ❤️
