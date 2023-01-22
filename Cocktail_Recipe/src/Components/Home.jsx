import React, { useState } from "react";
import Input from "./Input";
import Search from "./Search";

const Home = () => {
  const [cocktail, setCocktail] = useState("");
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState(false);

  const getInput = (name) => {
    setCocktail(name);
  };
  return (
    <>
      <h1>Your ultimate cocktail guide</h1>
      {console.log(result)}
      <Input getInput={getInput} setSearch={setSearch} />
      <Search cocktail={cocktail} setSearch={setSearch} setResult={setResult} />
    </>
  );
};

export default Home;
