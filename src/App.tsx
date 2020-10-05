import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const httpHandler = async () => {
    const response = await fetch("http://192.168.1.181:8000/", {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    console.log(await response.json());
  };

  const wsHandler = () => {
    const socket = new WebSocket("ws://192.168.1.181:8000/ws");

    socket.addEventListener("open", function (event) {
      socket.send("Hello Server!");
    });

    socket.addEventListener("message", function (event) {
      console.log("Message from server ", event.data);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={httpHandler}>HTTP</button>
        <button onClick={wsHandler}>WS</button>
      </header>
    </div>
  );
}

export default App;
