import React from "react";
import { useState, useEffect } from "react";
import ChartRow from "./ChartRow.js";

function Products(){

    const [dish, setDish] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3000/api/products")
      .then((response) => {return response.json();})
      .then((data) => {setDish(data.data)})
      .catch((error) => console.log(error));
   }, []);

   return(
<>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">

          <div className="card shadow mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Descripcion</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Descripcion</th>
                      <th>Precio</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {dish.map((row, i) => {
                      return <ChartRow {...row} key={i} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
   );



}
export default Products;