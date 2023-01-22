import React, { useState } from "react";
import Input from "./Input";

const Home = () => {
  const [cocktail, setCocktail] = useState("");
  const [search, setSearch] = useState("");

  const getInput = (name) => {
    setCocktail(name);
  };
  return (
    <>
      <h1>Your ultimate cocktail guide</h1>
      {console.log(cocktail)}
      <Input getInput={getInput} />
    </>
  );
};

export default Home;
