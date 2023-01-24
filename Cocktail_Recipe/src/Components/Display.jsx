import React, { useState } from "react";
import Button from "./Button";

const Display = (props) => {
  const [drinkArr, setDrinksArr] = useState([]);

  const displ = drinkArr.map((drink, id) => {
    for (let i = 0; i < id; i++) {
      // <ul>
      //   <li>{drink[1]}</li>
      // </ul>;
      console.log(drink);
    }
  });
  // return <div>{console.log(drinkArr)}</div>;

  const abc = () => {
    setDrinksArr(props.result.drinks);
  };
  return (
    <>
      <Button btnName="Test" btnFunc={abc}></Button>
      {console.log(drinkArr)}
    </>
  );
};

export default Display;
