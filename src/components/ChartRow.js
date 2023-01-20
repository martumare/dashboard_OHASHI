import React from 'react';

function ChartRow(props){
    return (
                <tr>
                    <td><img width="100" src={`http://localhost:3000/images/imagenes-platos/${props.image}`}></img></td>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                </tr>
            )
    }
    
export default ChartRow;