import React ,{ Component } from "react"

class Counter extends Component{
     constructor(props){
            super(props)
            this.state = {count:0}
            this.handleClick = this.handleClick.bind(this)
     }
     handleClick(){
           this.setState({count: this.state.count+1})

     }
 
     render(){
              return(
                  <button onClick = {this.handleClick}>Counter{this.state.count}</button>
              )

     }


}
export default Counter


