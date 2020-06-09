import React ,{ Component } from "react"

class Counter extends Component{
     constructor(props){
            super(props);
            this.state = {count:0}
           // this.handleClick = this.handleClick.bind(this)
     }
    
    //  handleClick = => {
    //        this.setState({count: this.state.count+1})

    //  }

    increment = () => {
        this.setState({count:this.state.count+1});
    }
    decrement = () => {
        this.setState({count:this.state.count-1});
    }
    
    
     render(){
              return(
                  <div classname="Counter">
                  <button onClick={this.increment} classname="counter">+</button>
                  <button onClick={this.decrement} classname="counter">-</button>

                  <h2>{this.state.count}</h2>
                  </div>
                  );

     }
    }


export default Counter


