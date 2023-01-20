import React from 'react';

function ChartRowUsers(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.lastName}</td>
                    <td>{props.address}</td>
                    <td>{props.email}</td>
                    <td>{props.phone}</td>
                </tr>
            )
    }
    
export default ChartRowUsers;