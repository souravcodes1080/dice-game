import React, { useEffect, useState } from "react";
// import {dice1 as a}  from "../assets/dice1.png"
function Play() {
  const [guess, setGuess] = useState(0);
  const [diceValue, setDiceValue] = useState(1);
  const [total, setTotal] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const dice = "dice";
  const rollDice = () => {
    setDiceValue(Math.floor(Math.random() * 6) + 1);
  };
  useEffect(() => {
    if (guess && diceValue) {
      if (guess === diceValue) {
        setTimeout(() => setTotal(total + 2), 0);
      } else if(guess !== diceValue && total !== 0) {
        setTimeout(() => setTotal(total - 2), 0);
      }
    }
  }, [diceValue]);

  return (
    <>
      <div className="header-component">
        <div className="total-score">
          <h2>{total}</h2>
          <p>Total Score</p>
        </div>
        <div className="choose-number">
            {guess === 0 ? "You have not selected any number": ""}
          <div className="boxes">
            <div
              className={guess === 1 ? "box black-box" : "box"}
              onClick={() => setGuess(1)}
            >
              1
            </div>
            <div
              className={guess === 2 ? "box black-box" : "box"}
              onClick={() => setGuess(2)}
            >
              2
            </div>
            <div
              className={guess === 3 ? "box black-box" : "box"}
              onClick={() => setGuess(3)}
            >
              3
            </div>
            <div
              className={guess === 4 ? "box black-box" : "box"}
              onClick={() => setGuess(4)}
            >
              4
            </div>
            <div
              className={guess === 5 ? "box black-box" : "box"}
              onClick={() => setGuess(5)}
            >
              5
            </div>
            <div
              className={guess === 6 ? "box black-box" : "box"}
              onClick={() => setGuess(6)}
            >
              6
            </div>
          </div>
          <p>Select Number</p>
        </div>
      </div>

      <div className="roll" onClick={rollDice}>
        <img src={`/assets/${diceValue}.png`} alt="" />
      </div>
      <div className="reset-button">
        <button onClick={() => setTotal(0)}>Reset Score</button>
      </div>
      <div className="rules-button">
        <button onClick={()=>setShowRules(!showRules)} >{!showRules ? "Show" : " Hide"} Rules</button>
      </div>

      <div className={showRules ? " rules" : "opacity rules "}>
        <div>
        <h3>How to play dice game</h3>
        <br />
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>After click on dice if selected number is equal to dice number you will get same point as dice </p>
            <p>If you get wrong guess then 2 point will be dedcuted </p>
        </div>
      </div>
    </>
  );
}

export default Play;
