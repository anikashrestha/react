import React, { Component } from 'react'
// import {Link} from 'react-router-dom';

export default class Home extends Component {
  state={
      users:[],
  }
  constructor(){
      super();
    }
    componentDidMount(){
        fetch(`https://api.github.com/users`).then(res=>res.json()).then(data=>{
            console.log("Users",data);
            this.setState({
                users:data,
            });
        })
    }
    render() {
    return (
      <div>
        {this.state.users.map(data=><Userlist obj = {data} />)}
       </div>
    )
  }
}
const Userlist=(props)=>{
    return(
        <div className="userlist">
        
        <img src={props.obj.avatar_url}/>
        <h1>{props.obj.login}</h1> 
        </div>
    )
}
