import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';


class Person extends Component {
  state={
    data:{}
  }
  handleClick = async(login)=>{
      await fetch(`https://api.github.com/users/${login}`)
      .then(res=>res.json()).then(data=>this.setState({data}));
      
  }
    render() {
    return (
      <div>
        <div onClick={()=>this.handleClick(this.props.user.login)}>
           <img src={this.props.user.avatar_url}  />
           {this.props.user.login} }
        </div>
      </div>
    )
  }
}
export default withRouter(Person);
