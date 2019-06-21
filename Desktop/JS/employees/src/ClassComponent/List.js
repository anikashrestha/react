import React from 'react';

class List extends React.Component{
    render(){
        return(
            <div>
               <table>
                 <tr>  
                <td style={{width:"150px"}}>{this.props.obj.name}</td>
                <td style={{width:"150px"}}>{this.props.obj.address}</td>
                <td style={{width:"150px"}}>{this.props.obj.salary}</td>
                </tr>
                </table> 
            </div>
        )
    }
}
export default List;