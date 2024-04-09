import RawData from "./RawData";
import Preview from "./Preview";
import { useState } from "react";
import React from "react";
import "./Wrapper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function Wrapper() {
  const [rawState, setRawState] = useState("# Test Heading");
  return (
    <div id="wrapper">
      <RawData state={rawState} setState={setRawState} />
      <FontAwesomeIcon icon={faArrowsRotate} size="4x" />
      <Preview state={rawState} />
    </div>
  );
}

export default Wrapper;
