import React, { Component } from 'react'

export default class User extends Component {
    state={
        users:[],
        loading:true
    }
    constructor(){
        super();
        this.showDetails=this.showDetails.bind(this);
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users`).then(res=>res.json()).then(data=>{
            console.log(data);
            this.setState({
                users:data,
                loading:false,
            });
        })
    }
    showDetails(id){
        const newArr=[...this.state.users];
        const currentUser=newArr.find(user=>user.id===id);
        console.log(currentUser);
        this.props.history.push('/details',{currentUser});
    }
    
  render() {
    return (
      <div className="users">
          {this.state.users.map(data=><UserList obj={data} showDetails={this.showDetails}/>)}
      </div>
    )
  }
}

const UserList =(props)=>{
    return(
        <div className="userlist" onClick={()=>props.showDetails(props.obj.id)}>
            <div>Name:{props.obj.name}</div>
            <div>Username:@{props.obj.username}</div>
            <div>Email:{props.obj.email}</div>
        </div>
    )
}
