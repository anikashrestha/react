import React from 'react';
import Table from './Table';
import TableRow from '../functional/TableRow;'

class Delete extends React.Component{
    
    render(){
        return(
            <div>
                <Table onRowDelete = {this.handleRowDel.bind(this)} 
                lists={this.state.lists}/>
            </div>
        )  
    }  
}
export default Delete;