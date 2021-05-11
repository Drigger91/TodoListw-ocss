import React, { Component } from 'react'

 class SorryBoo extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"Hello Boo!"
         }
     }
     clickHandler = ()=>{
        this.setState({
            message: "I am really sorry na, please forgive me :( I promise i'll never lie again."
                
        })
     }
     
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Click To Change</button>
            </div>
        )
    }
}

export default SorryBoo