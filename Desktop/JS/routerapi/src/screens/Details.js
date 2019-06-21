import React, { Component } from 'react'
import Posts from './Posts';

export default class Details extends Component {
    state={
        details:[]
    }
    componentDidMount(){
        if(this.props.location.state){
            this.setState({
                details:this.props.location.state}
            )}
        else{
            this.props.history.push('/')
        }
    }
    loadPosts=(id)=>{
        console.log(id);
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res=>res.json())
        .then(posts=>this.setStrate({posts})
        )
    }
  render() {
    return (
      <div>
        <div>Name:{this.details.state.name}</div>
            <div>Username:@{this.details.state.username}</div>
            <div>Email:{this.details.state.email}</div>
            <div>Street:{this.details.state.address.street}</div>
            <div>City:{this.details.state.address.city}</div>
            <div>Phone:{this.details.state.phone}</div>
            <div>Website:<a href={`https://www.${this.state.details.website}`}>{this.details.state.website}</a></div>
            <hr/>
            <div className="posts">
                <h1>posts</h1>
                {this.state.posts.map(post=>(<Posts post={post}/>))}
            </div>
      </div>
    )
  }
}
