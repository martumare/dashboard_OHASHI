import React from 'react';

function ChartRow(props){
    return (
                <tr>
                    <tp>{props.image}</tp>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                </tr>
            )
    }
    
export default ChartRow;