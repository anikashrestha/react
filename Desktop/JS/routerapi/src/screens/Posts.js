import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
class Posts extends Component {
  navigate=()=>{
      this.props.history.push('./post',{...this.props.post});
  }
    render() {
    return (
      <div className="postList">
        <h2>{this.props.post.title}</h2>
        <h3 onClick={this.navigate}>{this.props.post.body}</h3>
      </div>
    )
  }
}
export default withRouter(Posts);