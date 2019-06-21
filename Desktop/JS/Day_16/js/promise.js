//Asyncronous task--- 
///Async---------Event loop ,after all code are displayed    eg:this.setState
///call Stack---- line by line code store  Syncronous state 
////API call--Asunchronous

///success---resolve    failed--reject

// const wait = new Promise((resolve,reject)=>{  ///wait-- new promise    promise lina callback define-then
//      setTimeout(()=>{resolve('I love MOMO'),3000}
                             
//     );
//     reject("error");


//  });
// const wait = new Promise((resolve,reject)=>{  ///wait-- new promise    promise lina callback define
//      reject("Error");
                    

// });


// console.log("Before Wait");
// wait.then(data=>console.log({data})).catch(err=>console.log({err})).finally(()=>console.log("Jhuto bolnu hudaina"));
// console.log("After Wait");


///Async await----


// const wait = new Promise((resolve,reject)=>{  ////async awaits----- wait
//        setTimeout(()=>{resolve('I Speak MOMO')}
                                 
//       );
        
// });

// const getData=()=>{
//     console.log(wait);
// }
// getData();

// const getData=async()=>{
//     let data=await wait; /// await makes synchronous
// console.log(data);

// }
// getData();


// const getData=async()=>{
   
//    try{
//     let data=await wait; /// await makes synchronous
//     console.log(data);
//    } 
//    catch(err){
//        console.log(err);
//    }
// }

// getData();



// const wait = new Promise((resolve,reject)=>{  ////async awaits----- wait
//     resolve(1);}
                              
//    );
// const getData=async()=>{
//     try{
//      let data=await wait; /// await makes synchronous
     
//      if(data){
//          console.log(data);
//      }
//      else{
//          throw new error("Not expected data");
         
//      }
//      } 
//     catch(err){
//     console.log(err);
//         }
//        }
 
// getData();   

// const fruit=['Apple', 'Ball', 'Cat'];

// const getApple= new Promise((resolve,reject)=>{
//     resolve(fruit[0]);
// })
// console.log("Pineapple");

// getApple.then(fruit=>console.log(fruit));
// console.log('Jackfruit');




// const wait=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('hi!!'),3000);
// })
// const greeting=async()=>{
//     console.log('hello');
//     const greet=await wait;
//     console.log(greet);
//     console.log('heyy');
// }
// greeting();


// const greeting=()=>{
//     wait.then(data=>console.log(data));
// }
// greeting(); ////phillp roberts async awaits


console.log('hey there');
let i=0;
const wait=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(i),3000);
})
const greet=async()=>{

while(i<400000000000){
    i++
}
const greet=await wait;
console.log('00');
}
greet();