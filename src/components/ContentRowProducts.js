import React, {useEffect, useState} from "react";
import Card from "./Card";

function ContentRowProducts() {

  const [users, setUsers] = useState({});
	const [dish, setDish] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
        .then((response) => {return response.json();})
        .then((data) => {setUsers(data.data)})
        .catch((error) => console.log(error));


  fetch('http://localhost:3000/api/products')
      .then((response) => {return response.json();})
      .then((data) => {setDish(data.data)})
      .catch((error) => console.log(error));
 }, [])

  
  let productsInDB = {
    titulo: "Products in Database",
    color: "primary",
    cifra: dish.length,
    icono: "clipboard-list",
  };

  let adminsQuantity = {
    titulo: "Administrators",
    color: "success",
    cifra: users.countAdmin,
    icono: "award",
  };

  let usersQuantity = {
    titulo: "Users Quantity",
    color: "warning",
    cifra: users.count,
    icono: "user-check",
  };

  let cardProps = [productsInDB, adminsQuantity, usersQuantity];

  return (
    <div className="row">
      {cardProps.map((data, index) => {
        return <Card {...data} key={index} />;
      })}
    </div>
  );
}

export default ContentRowProducts;
