import React, { useState } from "react";
import "./App.css";

function App() {
  const updateClass = () => {
    var panel = document.getElementById("panel");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "500px";
    }
  };

  return (
    <body>
      <button onClick={updateClass} class="accordion">
        Section 1
      </button>
      <div id="panel">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </body>
  );
}

export default App;
