import React, { Component } from 'react'

 class Todo extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              list :[],
              input:""

         }
     }
     InputUpdate = (value)=>{ 
            this.setState({
                input: value
            })
     }
     AddItem = ()=>{
         const input ={
             id: Math.random()*10 ,
             value: this.state.input
         }
         const list = [...this.state.list , input]
         

 
         console.log(input.value)
         console.log(list)
        
     }

     
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input value = {this.state.input} onChange={ input => this.InputUpdate(input.target.value)}></input> <button onClick={()=>this.AddItem()}>Add</button>
          
                <ul>
                {
                    this.state.list.map(
                        input=>{return <li>{input.value}</li>}
                    )
                }
            </ul>
            </div>
        )
    }
}

export default Todo
