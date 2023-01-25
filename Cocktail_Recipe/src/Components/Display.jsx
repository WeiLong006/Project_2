import React, { useState } from "react";
import Button from "./Button";
import Image from "./Image";

const Display = (props) => {
  const displ = props.result.map((drink, id) => {
    return (
      <>
        <div className="drink">
          <Image imageName={drink.strDrink} imageSrc={[drink.strDrinkThumb]} />
        </div>
      </>
    );
  });

  return <>{displ}</>;
};

export default Display;
