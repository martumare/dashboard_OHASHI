import React from "react";
import ContentRowProducts from "./ContentRowProducts";
import imagen from "../assets/images/image1665015280641-.jpg";
import CategoriesInDb from "./CategoriesInDb";
import LastProductInDb from "./LastProductInDb";
function ContentRowTop() {
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Proyecto Grupal DH - OHASHI</h1>
        </div>

        {/*<!-- Content Row Products-->*/}
        <ContentRowProducts />
        {/*<!-- End Products in Data Base -->*/}

        {/*<!-- Last Product in Data Base -->*/}
        <LastProductInDb />
      </div>
      {/*<!-- End content row last product in Data Base -->*/}

      {/*<!-- Categories in DB -->*/}
      <CategoriesInDb />

      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
