import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>I am the home dsa</div>
      <Link to="/users">Go to users</Link>
    </div>
  );
};

export default {
  component: HomePage
};
