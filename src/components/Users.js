import React from "react";
import { useState, useEffect } from "react";
import ChartRowUsers from "./ChartRowUsers";

function Users(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then((response) => {return response.json();})
            .then((data) => {setUsers(data.data)})
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
                      <th>Apellido</th>
                      <th>Direccion</th>
                      <th>Mail</th>
                      <th>Telefono</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Direccion</th>
                      <th>Mail</th>
                      <th>Telefono</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {users.map((row, i) => {
                      return <ChartRowUsers {...row} key={i} />;
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

export default Users;