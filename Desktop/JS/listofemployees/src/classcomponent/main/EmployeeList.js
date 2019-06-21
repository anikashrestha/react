import React from 'react';
class EmployeeList extends React.Component{
    render(){
        return(
            <div>
                 <table border="1">
                     
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
export default EmployeeList;