import React from 'react';

class Hello extends React.Component{
    constructor(){
        super();
        this.handleChange=this.handleChange.bind(this)
    }

    state={
        username:'',
        password:''
    }

    handleChange(e){
        console.log(e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div>
                <input type='text' value={this.state.username}onChange={this.handleChange } placeholder="username" name='username'/>
                <input type='password' value={this.state.password}onChange={this.handleChange } placeholder="password" name='password'/>

                {this.state.username}
                {this.state.password}
            </div>
        )
    }
}
export default Hello;

