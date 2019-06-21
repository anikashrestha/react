import React, { Component } from 'react'
import { async } from 'q';
import Person from './Person';

export default class Search extends Component {
    state={
        results:[],
        err:false
    }
    constructor(){
        super();
      }
    handleChange=async(e)=>{
        if(e.target.value!==""){
            await fetch(`https://api.github.com/search/users?q=${e.target.value}`)
            .then((res)=>res.json()).then((results)=>{
                if(results.total_count===0){
                    this.setState({err:true})
                }
                else{
                    this.setState({results:results.items, err:false});
                }
            })
        }
    }
    render() {
    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" onChange={this.handleChange} placeholder="Search" aria-label="Search"/>
          
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          {this.state.results?this.state.results.map((result)=>{
              return <Person user ={result}/>
          }):""}
        </form>
      </div>
    )
  }
}
//didcatch