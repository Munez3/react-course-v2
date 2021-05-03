import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import App2 from "./2 _props/App2";
import App3 from "./3_ts/App3";
import App4 from "./4_state/App4";
import App5 from "./5_form/App5";
import App6 from "./6_ref/App6";
import App7 from "./7_if/App7";
import App8 from "./8_reducer/App8";
import App9 from "./9_reducer_delete/App9";
import App10 from "./10_sass/App10";
import Index11 from "./11_context/index11";

ReactDOM.render(
  <React.StrictMode>
    <Index11 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
