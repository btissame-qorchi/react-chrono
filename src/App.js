import React from "react";
import "./styles.css";
import { Chrono } from "react-chrono";
import data from "./data";

export default function App() {
  return (
    <div className="App">
      <div style={{ width: "100%", height: "800px" }}>
        <Chrono  items={data}  slideItemDuration={1000} mode="VERTICAL_ALTERNATING" theme={{primary : '#283747', secondary:'#D5D8DC'}}/>
      </div>
    </div>
  );
}
