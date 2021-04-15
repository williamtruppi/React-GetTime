import React, { useState } from "react";

function App() {
  let [time, setTime] = useState(0);

  function getTime() {
    setTime((time = new Date().toLocaleTimeString()));
  }
  setInterval(getTime, 1000);

  console.log(time);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
