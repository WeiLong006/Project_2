import React, { useState } from "react";
import Display from "./Display";

const Search = (props) => {
  const defaultUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const cocktail = props.cocktail;
  let search = props.setSearch;
  const [resultArr, setResultArr] = useState([]);

  const fetchCocktail = async (url) => {
    const res = await fetch(url);
    const resData = await res.json();
    setResultArr(resData);
    props.setResult(resData);
  };

  if (cocktail && props.setSearch) {
    fetchCocktail(defaultUrl + cocktail);
    search = false;
  }

  return (
    <div>
      <Display resultArr={resultArr} />
    </div>
  );
};

export default Search;
