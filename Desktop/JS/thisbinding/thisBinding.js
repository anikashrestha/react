// function play(){
//     console.log(this); //sees where the function is excuited i.e global scope-
// }
// play();


// let dog={
//     name:'Subash',
//     age:'5',
//     makeSound(sound){
//         console.log(`${this.name} produces ${sound}`);
//         console.log(this);
//     }
// }
// //dog.makeSound('Bhow');

// // let makeSound = dog.makeSound.bind(dog);
// // makeSound('Meow');

// setTimeout(dog.makeSound.bind(this),3000);  //async             .bind(this)---- class vitra ko data access gara paeyos     



const dog={
    name:'Asim',
    poop()
    {
        console.log(`${thisname} poops`);

    }
}dog.poop();
setTimeout(dog.poop.3000);