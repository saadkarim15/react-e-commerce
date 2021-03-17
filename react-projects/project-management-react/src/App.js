/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import React, { useState, useEffect } from "react";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";

function App() {
  const styles = {
    bounce: {
      animation: "x 1s",
      animationName: Radium.keyframes(bounce, "bounce"),
    },
  };
  //
  const API =
    "https://241197306431-nvkm8s5mt8nv18r7tu13avbkpgfr435n.apps.googleusercontent.com";

  useEffect(() => {
    FetchApi();
  }, []);

  const FetchApi = async () => {
    const response = await fetch(API);
    const data = await response.json();

    console.log(data);
  };
  return (
    <div className="APP">
      <StyleRoot>
        <div className="test" style={styles.bounce}></div>
      </StyleRoot>
    </div>
  );
}

export default App;
