import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "./assets/game.png";


function Home() {
  return (
    <div className="home"  style={{ backgroundImage: `url(${BannerImage})` }} >
    
      <div className="headerContainer">
        <h1>게임해요!</h1>
        <Link to="/Brick">
          <button>Let's Go!</button>
        </Link>
        <h2 style={{color: 'white'}}>z가 발사, 화살표로 이동</h2>
      </div>
    </div>
  );
}
export default Home;