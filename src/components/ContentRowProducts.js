import React from "react";
import Card from "./Card";

function ContentRowProducts() {
  let productsInDB = {
    titulo: "Products in Database",
    color: "primary",
    cifra: 21,
    icono: "clipboard-list",
  };

  let totalCategories = {
    titulo: "Total Categories",
    color: "success",
    cifra: 79,
    icono: "award",
  };

  let usersQuantity = {
    titulo: "Users Quantity",
    color: "warning",
    cifra: 49,
    icono: "user-check",
  };

  let cardProps = [productsInDB, totalCategories, usersQuantity];

  return (
    <div className="row">
      {cardProps.map((data, index) => {
        return <Card {...data} key={index} />;
      })}
    </div>
  );
}

export default ContentRowProducts;
