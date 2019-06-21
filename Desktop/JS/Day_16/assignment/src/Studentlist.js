// import React from 'react';
// import Student from './Student'
// import Form from './Form'
// class Studentlist extends  React.Component{

//     constructor(){
//         super();
//         this.addStudent=this.addStudent.bind(this);
//         this.handleSubmit=this.handleSubmit.bind(this);
//         this.deleteStudent=this.deleteStudent.bind(this);
//     }

//     state={
//         details:[
//             {name:"Asim" ,age:30 ,roll:24},
//             {name:"Asim" ,age:30 ,roll:24},
//             {name:"Asim" ,age:30 ,roll:24},
//             {name:"Asim" ,age:30 ,roll:24}
//         ]
//     }

//      addStudent(){
//          this.setState({
//            details:[...this.state.details,{name:'Shrishma',age:18,roll:6},
//            ]
//          })
//      }

//     deleteStudent(i){
//         let studentArr=[...this.state.details];
//         let newArr=studentArr.filter((student,index)=>index!==i);
//         this.setState({details:newArr})
//     }

//     handleSubmit(e){
//         e.preventDefault();
//        const newStudent ={
//            name:e.target.name.value,
//            age:e.target.age.value,
//            roll:e.target.roll.value
//        }
//        this.setState({students:[newStudent,...this.state.details]})
//     }
//        render(){
//         return(
//             <div>
//                 {/* <form onSubmit={this.handleSubmit}>
//                     <input type='text' name='name' placeholder='Name' />
//                     <input type='text' name='age' placeholder='Age'/>
//                     <input type='text' name='roll' placeholder='Roll'/>
//                     <button type='submit'>Add Student</button>
//                 </form> */}

//                 {this.state.details.map((student,i)=><Student studentObject={student} deleteStudent={this.deleteStudent} index= {i}/>)}
               

//             </div>
//             )
//     }
// }
// export default Studentlist;