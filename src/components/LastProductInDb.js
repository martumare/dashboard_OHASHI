import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LastProductInDb() {

  const [dish, setDish] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3000/api/products/last")
      .then((response) => {return response.json();})
      .then((data) => {setDish(data.data)})
      .catch((error) => console.log(error));
   }, []);

  return (
    <div className="row">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Last Product in DB 
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: 40 + "rem"}}
                src={`http://localhost:3000/images/imagenes-platos/${dish.image}`} alt={dish.name}
              />
            </div>
            <p>
            {dish.description}
            </p>
            <Link
              className="btn btn-danger"
              target="_blank"
              rel="nofollow"
              to="/lastProduct"
            >
              View dish detail
            </Link>
          </div>
        </div>
      
    </div>
  );
}

export default LastProductInDb;
