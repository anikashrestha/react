import React,{useState,Fragment,useEffect} from 'react'

const Counter=()=> {
    const [name,changeName]= useState("Anika");
    const [lastname,changelastname]= useState("Shrestha");

    useEffect(()=>{
       // setInterval(()=>{changeName(new Date().getSeconds())},1000); //componentDidMount

       console.log({name});

        return ()=>{
          //  console.log('unmount'); /////dependencies


        }  /// yarn add react@16.7.0-alpha.   ////yarn add react-dom@16.7.0-alpha. ///yarn add @material-ui/core @material-ui/icons
    },[name,lastname])
    return (
    <>
    <div>
      <input  type="text"  value={name} onChange={e =>{changeName(e.target.value);
      }}
      />
      <input  type="text"  value={lastname} onChange={e =>{changeName(e.target.value);
      }}
      />
    </div>
    <div>{name}</div>
    </>
   );
}
export default Counter;