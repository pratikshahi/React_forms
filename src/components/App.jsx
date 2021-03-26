import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [myName, setMyName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setMyName(name);
  }

  return (
    <div className="container">
      <h1>Hello {myName} </h1>

      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
