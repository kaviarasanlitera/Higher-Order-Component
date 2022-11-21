import React from "react";
import updatedComponent from "./HOC";

const Person2 = ({ money, handleIncrease }) => {
  return (
    <div style={{ display: "flex", "justify-content": "center" }}>
      <h2>Person 2 is offering ${money} for the trust</h2>
      <button onClick={handleIncrease}> Money</button>
    </div>
  );
};

export default updatedComponent(Person2);
