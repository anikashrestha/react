import React from 'react';
import Add from './Add';
import Delete from './Delete';
const Head =(props)=>{
    return(
        <div>
            <div className="col-xs-12 col-sm-6 col-lg-6"><Add changeShow={props.changeShow}/></div>
            <div className="col-xs-12 col-sm-6 col-lg-6"><Delete deleteButtonShow={props.deleteButtonShow}/></div>    
        </div>
    )
}
export default Head;