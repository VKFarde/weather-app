import React from "react";
import mt from "./openweather.png";

function Foo() {
  return (
    <div className="foo">
      <img src={mt} alt="logo" />

      <h4>
        Contact :&nbsp;
        <a
          href="https://vedantfarde.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vedant Kiran Farde
        </a>
      </h4>
    </div>
  );
}

export default Foo;
