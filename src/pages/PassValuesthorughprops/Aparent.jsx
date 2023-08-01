import React from "react";
import B from "./Bchild";
const A = () => {
  const data = {
    name: "John Doe",
    age: 30,
    city: "New York",
  };

  return (
    <div>
      <h2>I'm a Parent Component : A</h2>
      <B data={data} />
    </div>
  );
};

export default A;
