import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Main() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
