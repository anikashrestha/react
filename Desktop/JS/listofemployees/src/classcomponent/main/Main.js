import React from "react";
import './main.css';
import EmployeeList from '../main/EmployeeList';
import Head from '../../functionalcomponent/header/index';
import Drop from '../../functionalcomponent/dropdown/Dropdown';
import DeleteUser from '../../functionalcomponent/body/Deleteuser';
import Form from '../../functionalcomponent/body/Form';
class Main extends React.Component{
    constructor(){
      super();
        this.changeShow = this.changeShow.bind(this);
        this.getFormData = this.getFormData.bind(this);
        this.deleteButtonShow = this.deleteButtonShow.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.onname = this.onname.bind(this);
        this.onsalary = this.onsalary.bind(this);        
    }

    state={
        show:false,
        button:false,
        array:[{name:"Anika", address:"Balaju", Salary:500},
        {name:"Ram", address:"Balaju", Salary:50},
        {name:"Shyam", address:"Balaju", Salary:5}]
    };

    changeShow(){
        this.setState({
            show: !this.state.show
        });
    }

    deleteButtonShow() {
        this.setState({
          button: !this.state.button
        });
    }

    getFormData(e){
        this.setState({
            array:[...this.state.array,{
                name: e.target.name.value,
                address:e.target.address.value,
                salary:e.target.salary.value
            }],
            show:false
        });
    }

    deleteUser(i){
        let employeeArray=[...this.state.array];
        let newArray=employeeArray.filter((employee,index)=>index !==i);
        this.setState({array:newArray});
    }

    onname(){
        console.log("Name");
        let newArray=this.state.array.slice();
        let sortArray=newArray.sortArray((a,b)=>{
            if(a.name.toLowerCase()>b.name.toLowerCase()){
                return 1;
            }
            else{
                return-1;
            }
        });
        console.log(sortArray);
        this.setState({array:newArray});
    }

    onsalary(){
        //console.log("Salary");
        let newArray = this.state.array.slice();
        let sortArray = newArray.sort((a,b)=>{
        if (Number(a.salary) > Number(b.salary)) {
            return 1;
        } else {
            return -1;
        }
        });
        console.log(sortArray);
        this.setState({ array: newArray });
    }

    render(){
        return(
            <div>
              <h1 >List of Employee</h1>

            <div className="row">

              <Head changeShow={this.changeShow} deleteButtonShow={this.deleteButtonShow}/>
            </div>
            

            <div className="row">

              <Drop onname={this.onname} onsalary={this.onsalary} />

            </div>

            <div className="row">
              {this.state.show ? <Form getFormData={this.getFormData} /> : ""}

            </div>
          
            <div className="list-background">

            

            

            <table align="center" >

              <tbody>
                <tr>
                  <th style={{ width: "150px", textAlign: "center" }}>
                        Name
                  </th>
                  <th style={{ width: "150px", textAlign: "center" }}>
                        Address
                  </th>
                  <th style={{ width: "150px", textAlign: "center" }}>
                        Salary
                  </th>
                </tr>

                    {this.state.array.map((data, i) => {
                      return (
                        <tr>
                          <td height="50">{data.name}</td>
                          <td height="50">{data.address}</td>
                          <td height="50">{data.salary}</td>
                          <td height="50">
                            {this.state.button?(<DeleteUser deleteUser={this.deleteUser}index={i}/>): ("")}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
        )
    }
}
export default Main;