import React,{useState,useEffect,Regex} from 'react'
import People from './people.json';


const Example=()=> {
    const [name,changeName]= useState("Anika");
    const [people,changePeople]=useState(People.people);
    const [peopleClone]=useState(People.people);

    useEffect(()=>{
      return ()=>{ ///regular expression --validation
        const regex= new RegExp(name,"gi"); ///string bata pattern change regex
        changePeople(
            peopleClone.filter(person=>{
                return regex.test(person.name);
             })
        )
     }
    },
    [name]
    )
    return (
    <>
    <div>
      <input  type="text"  value={name} onChange={e =>{changeName(e.target.value);
      }}
      />
      
    </div>
    {people.map((person,i)=>(
        <div key={i}>{person.name}</div>
    ))}
    </>
   );
}
export default Example;