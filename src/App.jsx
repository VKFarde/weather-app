import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./componand";
import "./App.css";
import { InnerScreenSize } from "./conetxt/secreenSize";

function App() {
  return (
    <>
      <InnerScreenSize>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </InnerScreenSize>
    </>
  );
}

export default App;
