import React from "react";
import "./main.css";
import Part1 from "./part/Part1";
import Part2 from "./part/Part2";
import Foo from "../foo/Foo";
function Main({ data, foreD }) {
  return (
    <div className="Main">
      <Part1 data={data} />
      <Part2 data={data} foreD={foreD} />
      <footer>
        <Foo />
      </footer>
    </div>
  );
}

export default Main;
