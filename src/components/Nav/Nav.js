import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li id="rw">{props.rightWrong}</li>
      <li className="brand animated lightSpeedIn">
        <a href="/clicky-game/"><img className="pokemon-logo" alt={props.name} src={"https://img00.deviantart.net/9aa7/i/2015/126/3/7/pokemon_logo_metallic_by_niru_kun-d8sezg4.png"} /></a>
      </li>
      <li className="scoreboard">
        <div className="team gsw win">
          {/* <div className="rank">1</div> */}
          <img className="logo" alt={props.name} src={"https://res.cloudinary.com/teepublic/image/private/s--D8V-SvHM--/t_Preview/b_rgb:191919,c_limit,f_auto,h_313,q_90,w_313/v1513055592/production/designs/2167967_1"}/>
          <div className="name"></div>
          <div className="score">Top Score:</div>
          <div className="record">{props.topScore}</div>
        </div>
        <div className="divider"><p></p></div>
        <div className="team utc">
          {/* <div className="rank">8</div> */}
          <img className="logo" alt={props.name} src={"https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-256.png"}/>
          <div className="name"></div>
          <div className="score">Current Score:</div>
          <div className="record">{props.score}</div>
        </div>
</li>

    </ul>
  </nav>
);

export default Nav;