import React from "react";

const Search = (props) => {
  const defaultUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const cocktail = props.cocktail;
  const search = props.setSearch;

  const fetchCocktail = async (url) => {
    const res = await fetch(url);
    const resData = await res.json();
    props.setResult(resData);
  };

  if (cocktail && search) {
    fetchCocktail(defaultUrl + cocktail);
  }

  return <div></div>;
};

export default Search;
