import React, { useState } from "react";
import Display from "./Display";
import Input from "./Input";
import Search from "./Search";

const Home = () => {
  const [cocktail, setCocktail] = useState("");
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState(false);
  const defaultUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const getInput = (name) => {
    setCocktail(name);
  };

  const fetchCocktail = async (url) => {
    const res = await fetch(url);
    const resData = await res.json();
    setResult(resData);
  };

  if (cocktail && search) {
    fetchCocktail(defaultUrl + cocktail);
    setSearch(false);
  }

  return (
    <>
      <h1>Your ultimate cocktail guide</h1>
      {/* {console.log(result)} */}
      <Input getInput={getInput} setSearch={setSearch} />
      {/* <Search cocktail={cocktail} setSearch={setSearch} setResult={setResult} /> */}
      <Display result={result} />
    </>
  );
};

export default Home;
