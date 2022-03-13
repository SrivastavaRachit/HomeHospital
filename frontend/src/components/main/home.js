import React from "react";
import "../../stylesheet/home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <section class="hero">
        <header id="header"></header>
        <header class="hero-header">
          <h1 class="hero-title">Home Hospital</h1>
        </header>
        <footer class="hero-footer">
          <Link class="button button-primary" to="/main/Login">
            Login
          </Link>
          <Link class="button" to="/main/SignUp">
            SignUp
          </Link>
        </footer>
      </section>
      <article></article>
    </div>
  );
}
