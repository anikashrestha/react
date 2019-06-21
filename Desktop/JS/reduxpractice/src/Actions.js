
///function that returns new object that listens the actions

export const add = (data) =>{
  return{

    type:'ADD' ,
    payload:data  /// also includes "data:"
}}
export const subtract = () =>({
    type:'SUBTRACT'
});

