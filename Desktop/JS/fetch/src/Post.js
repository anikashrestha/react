import React from 'react';

const Post = ({id,title,body})=>( //props
    <div >
        <div style ={style.id}>Id:{id}</div>
        <div style ={style.title}>Title:{title}</div>
       <div style ={style.body}>Body:{body}</div>
    </div>
)

// {/* // const style={ */}
{/* //     backgroundColor:'black',
//     color:'red',
//     padding:'10px',
//     margin:'10px'
  
//   } */}

const style={
    id:{
        fontSize:'20px',
        color:'#aaffbb'
    },
    title:{
        fontWeight:'bold',
        borderBottom:'2px dashed black'
    },
    body:{
        border:'1px dashed black',
        backgroundColor:'#aaa'
    }
  }

export default Post;