import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Paraglider</h1>
    <p>Somthing mind blowing</p>
    <Link to="about" className="btn btn-primary btn-lg">
      about
    </Link>
  </div>
);

export default HomePage;
