import React from 'react'

function ListRender(props) {
   
    return ( 
        <div>
            <li><h2> {props.text}</h2><button onClick={()=>props.delItems(props.id)}>Delete</button></li> 
        </div>
    )
}

export default ListRender
