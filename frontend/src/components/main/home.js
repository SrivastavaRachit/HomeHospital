import React from "react";
import "../../stylesheet/Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <section class="hero">
        <header id="header"></header>
        <header class="hero-header">
          

        </header>
        <div className="abcd">
          <div className="hjk">
          <Link class="button button-primary" to="/main/Login">
            Login
          </Link>
          <Link class="button button-primary" to="/main/SignUp">
            SignUp
          </Link>
          </div>
          <h1 class="hero-title">Home Hospital</h1>
          </div>
       
        
      </section>
      <article></article>
    </div>
  );
}
