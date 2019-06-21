import React from 'react';

const Form=(props)=>{
    return(
        <div>
        <form onSubmit={props.handleSubmit}>
            <input type='bootstrap responsive table exampletext' name='name' placeholder='Name' />
            <input type='text' name='age' placeholder='Age'/>
            <input type='text' name='roll' placeholder='Roll'/>
            <button type='submit'>Add Student</button>
        </form>

  
        </div>
    )
}
export default Form;