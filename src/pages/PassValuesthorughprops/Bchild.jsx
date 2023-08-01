import React from "react";

const B = ({ data }) => {
  return (
    <div>
      <h2>I'm a Child Component: B</h2>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>City: {data.city}</p>
    </div>
  );
};

export default B;
