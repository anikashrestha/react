import React from 'react';

class Asynchronous extends React.Component{
     constructor(){
         super();
         this.changeState=this.changeState.bind(this);
     }
    state={
        Name:"Anika",
        
}
    Update(){
        this.setState(
            { Update:!this.state.Name }
        )
        console.log(this.state);
    }
        
    render(){
        return(
            <button onClick={this.Update}>Button</button>
        )
    }
}
export default Asynchronous;