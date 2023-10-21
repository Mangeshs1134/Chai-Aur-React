import { useState } from "react";

function App() {
  const [color, setColor] = useState("#F8BDEB");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="bar outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: "#3876BF" }}>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >
          GreeN
        </button>
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "yellow" , color : "black" }}
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("#DE8F5F")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "#DE8F5F" , color : "black" }}
        >
          Cream
        </button>
        <button
          onClick={() => setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "grey" , color : "black" }}
        >
          Grey
        </button>
      </div>
    </div>
  );
}

export default App;
