// var arr=[1,2,4,5,6,7,8,9,10,11,12,13,14,15];
// arr.forEach(function(val){
//     console.log(val+2);
// })

// const arr2 = arr.map(function(val){
//     return val+1;
// });
// console.log(arr2);

// const arr3 = arr.filter(function(value){
//     if(value>8){return true;}
//     else {return false};
// })
// console.log(arr3);

// const arr4 = arr.find(function(value){
//     if(value==5){
//         return value;
//     }
// })
// console.log(arr4);

// arr.indexOf(8);

// async function abcd(){
//     var bolb = await fetch(`https://randomuser.me/api/`);
//     var ans = await bolb.json();
//     console.log(ans.results);
//     console.log("Hello There");
// }
// abcd();
// const promiseOne = new Promise(function(resolve,reject){
//     //async tasks
//     resolve();
//     setTimeout(function(){
//         console.log('Async task is done');
//     },2000)
// })
// promiseOne.then(function(){
//     console.log('Promise done');
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async tasks2 complete');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('Promise 2 done');
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Task completed");
//         resolve({username:"Bimal", email: "bimal@gmail.com"})
//     },1000);
// })
// promiseThree.then(function(user){
//     console.log(user.username);
// })

// const promisefour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "Bimal Gautam" , password: "Bimal123"} )
//         }
//         else{
//             reject('Error: Something went wrong');
//         }
//     },1000)
// })

// promisefour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((myusername)=>{
//     console.log(myusername);
// })
// .catch(function(err){
//     console.log(err);
// }).finally(()=>{
//     console.log("The promise either resolve or reject");
// })

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username: "Bimal" , age: 21});
//         }
//         else{
//             reject("Something went wrong");
//         }
//     },1000)
// })

// async function consumepromisefive(){
//     const response = await promiseFive;
//     console.log(response.username);
// }
// consumepromisefive();


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json();

// }).then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })

async function datareceive(){
    const requrl =  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requrl);
    const response = await fetch(request);
    const data = await response.json();
    populateHeader(data);
    populateheros(data);
}

function populateHeader(obj){
    const header = document.querySelector("header");
    const myh1 = document.createElement("h1");
    myh1.textContent = obj.squadname;
    header.appendChild(myh1);

    const mypara = document.createElement("p");
    mypara.textContent =  `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(mypara);
}

populateheros=(obj){
    const section = document.querySelector("section");
    const hero = obj.members;

    const artical = document.createElement("artical");
    const myh2 = document.createElement("h2");
    const myp1 = document.createElement("p");
    const myp2 = document.createElement("p");
    const myp3 = document.createElement("p");
    const myul = document.createElement("ul");

    myh2.textContent = hero.name;
    myp1.textContent = `Secrt Code: ${hero.secretIdentity}`;
    myp2.textContent = `Age: ${hero.age}`;
    myp3.textContent = "Hello Hi good bye";

    const superpowers = hero.powers


}



