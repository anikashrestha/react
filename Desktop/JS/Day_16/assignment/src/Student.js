import React from 'react';

const Student=(props)=>{
    console.log(props)
    return(
        <div style={{border:'1px solid black',margin:10,padding:20}}>
             <div>Name:{props.studentObject.name}</div>
             <div>Age:{props.studentObject.age}</div>
             <div>Roll:{props.studentObject.roll}</div>
              <button onClick={()=>props.deleteStudent(props.index)}></button>
        </div>
    )
}
export default Student;