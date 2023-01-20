import React from "react"; 
import ErrorIMG from '../assets/images/error-404.png';

function Error404(){
    return(
        <React.Fragment>
            <div>
                <img src={ErrorIMG} alt="Imagen de error 404" style={{ width: 60 + "rem" }}/>
            </div>
        </React.Fragment>
    )
}

export default Error404;