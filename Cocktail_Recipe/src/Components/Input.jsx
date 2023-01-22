import React, { useState } from "react";
import Button from "./Button";

const Input = (props) => {
  const [userInput, setUserInput] = useState("");
  const getInput = (event) => {
    setUserInput(event.target.value);
  };

  const search = () => {
    props.getInput(userInput);
    props.setSearch(true);
  };

  return (
    <>
      <input onChange={getInput}></input>
      <Button name="Search" btnFunc={search} />
    </>
  );
};

export default Input;
