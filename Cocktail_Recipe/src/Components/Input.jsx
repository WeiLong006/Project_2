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
    setUserInput("");
  };

  return (
    <>
      <input value={userInput} onChange={getInput}></input>
      <Button btnName="Search" btnFunc={search} />
    </>
  );
};

export default Input;
