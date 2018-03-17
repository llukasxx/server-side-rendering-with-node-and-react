import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>I am the home dsa</div>
      <button onClick={() => console.log("click me")}>Click me</button>
      <Link to="/users">Go to users</Link>
    </div>
  );
};

export default {
  component: HomePage
};
