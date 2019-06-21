import React from 'react';
import Modal from '../modal';

const sure=()=>{
    alert()
}
const DeleteUser =(props)=>{
    return(
        <div>
            {/* <button onClick={()=>props.deleteUser(props.index)}>Delete</button> */}
            <button className="btn btn-danger"type="button" data-toggle="modal" data-target={`#${props.index}`}>Delete</button>
            <Modal deleteUser={props.deleteUser} index={props.index}/>
             </div>
    )
}
export default DeleteUser;