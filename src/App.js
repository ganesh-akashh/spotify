
import React from "react";
import "./App.css";
import LeftMenu from "./Components/LeftMenu";
import MainContainer from "./Components/MainContainer";
import RightMenu from "./Components/RightMenu";

export default function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className="background" ></div>
    </div>
  )
}

