import React, { Component } from 'react'
import Posts from './Posts';
import Comment from './Comment';

export default class Postscreen extends Component {
  state={
      post:[],
      comment:[]
  }
  async componentDidMount(){
      await this.setState({post:this.props.location.state}),
    fetch`https://jsonplaceholder.typicode.com/comments?postId=${this.state.post.id}`
    then(res=>res.json()).then(state=this.setState({comment:data}))
  }
    render() {
    return (
      <div>
        <Posts post={this.state.post}/>
        <h1>Comments</h1>
        {this.state.comment.map(comments=><Comment comment={comments}/>)}
      </div>
    )
  }
}
