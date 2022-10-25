import React from "react";
import CustomCursor from "./components/CustomCursor/CustomCursor";

const App = () => {
  return (
    <section className="container">
      <CustomCursor />
      {/* this should have been a component */}
      <nav>
        <div className="brand">
          <p>MOON CLUB</p>
        </div>
        <ul className="nav-links">
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Discord</li>
        </ul>
      </nav>

      <div className="hero-container">
        <h1>Earn</h1>
        <h1>The Tokens</h1>
        <h1>Revolutionize</h1>
        <h1>The blockchain networks</h1>
      </div>
    </section>
  );
};

export default App;
