import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';
import Loading from './Loading';

class App extends Component {
  ////fetch--API bata data tanne from the server:connects frontend and backend

  constructor(){
    super();
    this.getDataFromServer=this.getDataFromServer.bind(this);
  }
  state={
    posts:[]
  }
  // getDataFromServer(){
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')  //Server URL: Gives data as a response
  //   .then(response => response.json())  ///response:promise in non formatted form 
  //   .then(json => console.log(json))
  // }
///post
  getDataFromServer(){
    this.setState({Loading:true})
    fetch('https://jsonplaceholder.typicode.com/posts')  //Server URL: Gives data as a response
    .then(response => response.json())  ///response:promise in non formatted form - in array object form
    .then(posts => this.setState({posts,Loading:false}));    
  }

  

  render() {
    return (
      <div className="App" >
      {this.state.Loading?(<Loading/>):(
        this.state.posts.map(post=><Post id={post.id} title={post.title} body={post.body} key={post.id}/>)
      )}
        <button onClick={this.getDataFromServer}>
          Fetch data from the server
        </button>
      </div>
    );
  }
}

export default App;
