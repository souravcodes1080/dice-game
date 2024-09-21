import React from "react";
import BigDice from "../assets/BigDice.png"
import { Link, useNavigate } from "react-router-dom";
function Homepage() {
    const navigate = useNavigate();
  return (
    <>
      <div className="homepage-wrapper">
        <div className="hero">
            <img src={BigDice} alt="hero" />
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Link to={"/play"}>
                <button>Play Now</button>
            </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;
