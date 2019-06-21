import React, { Component } from 'react'

const Comment=()=> {
    return (
      <div>
        <h4>{props.comment.name}</h4>
        <h3>{props.comment.body}</h3>
      </div>
    )
  }
export default Comment;