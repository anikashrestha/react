import React, { Component } from 'react'
import Person from './Person';

export default class Home extends Component {
    constructor(){
        super();
        this.getUserInfo=this.getUserInfo.bind(this);
    }
  state={
    users:[],
}

  componentDidMount(){
      fetch(`https://api.github.com/users`).then(res=>res.json()).then(data=>{
          console.log("Users",data);
          this.setState({
              users:data,
          });
      })
  }
  getUserInfo(username){
      console.log(username);
    this.props.history.push('/profile',{"username":username})

  }
  render() {
  return (
    <div>
      {this.state.users.map(data=><Userlist user = {data} getUserInfo={this.getUserInfo}/>)}
     </div>
  )
}baseline
}
const  Userlist =(props)=>{
    return(
        <div onClick={()=>props.getUserInfo(props.user.login)}>
            <img src={props.user.avatar_url}/>
            <span>{props.user.login}</span>
        </div>
    )

}
