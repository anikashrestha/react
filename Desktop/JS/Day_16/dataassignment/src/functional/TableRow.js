import React from 'react';
import EditableCell from '../functional/EditableCell';

class TableRow extends React.Component{
    onDelEvent() {
        this.props.onDelEvent(this.props.list);
    
      }
      render(){
          return(
            <tr className="eachRow">
            <EditableCell onTableUpdate={this.props.onTableUpdate} cellData={{
              "type": "name",
              value: this.props.list.name,
              id: this.props.list.id
            }}/>
            <EditableCell onTableUpdate={this.props.onTableUpdate} cellData={{
              type: "salary",
              value: this.props.product.salary,
              id: this.props.list.id
            }}/>
            
            <td className="del-cell">
              <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
            </td>
          </tr>
        );
          
      }
}
export default TableRow;