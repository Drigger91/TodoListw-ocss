import React, { useState } from 'react'
import ListRender from './ListRender'

function Todo1() {
    const[items, setItems] = useState([])
    const [input,setInput] = useState('')
    const inputEvent = (userInput)=>{
                setInput(
                        userInput.target.value
                )
    }
    const AddItems = ()=>{
        setItems(prevlist=>{
                return [...prevlist,input]
        })
        setInput('')
    }
    const delItems = (id)=>{
        setItems((prevlist)=>{
           return prevlist.filter((val,index)=>{
                return index!==id;
            }
         ) })
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <input value={input} placeholder='Add items to list' onChange={inputEvent}></input>
            <button onClick={AddItems}>Add</button>
             <ul>
                {
                    items.map( (item,index)=>{ return <ListRender text={item} id={index} key={index} delItems={delItems}></ListRender>}) 
                 
                }
            </ul> 
        </div>
    )
}

export default Todo1
