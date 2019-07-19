// Async with setTimeout
// setTimeout(function(){
//     console.log("hello 1");

//     setTimeout(function(){
//         console.log("hello 2");

//         setTimeout(function(){
//             console.log("hello 3");

//             setTimeout(function(){
//                 console.log("hello 4");
//                 setTimeout(function(){
//                     console.log("hello 5");
//                 }, 1000);
//             }, 2000);
//         }, 3000);
//     }, 4000);
// }, 5000);
// console.log("Hello");

// Async with Promise
// new Promise(function(resolve, reject) {
//     if (1 < 0 || undefined) {
//         resolve(1);
//     } else {
//         reject(Error("There is an error"));
//     }
// });

// example
// function asyncFunc(work) {
//     return new Promise(function(resolve, reject) {
//         if (work === "") {
//             reject(Error("Nothing"));
//         } else {
//             setTimeout(function() {
//                 resolve(work);
//             }, 1000);
//         }
//     });
// }


// var x = asyncFunc("result 1")
// .then(function(result1) {
//     console.log("result 1: " + result1);
//     return asyncFunc(result1 + " result 2");
// }, function(error1) {
//     console.log(error1);
// })
// .then(function(result2){
//     console.log("result 2: " + result2);
//     return asyncFunc(result2 + " result 3");
// }, function(error2){
//     console.log(error2);
// })
// .then(function(result3){
//     console.log("result 3: " + result3);
// }, function(error3) {
//     console.log(error3);
// });
// console.log("Final");



// asyncFunc("work 1")
// .then(function(result) {
//     console.log("result: " + result);
//     return asyncFunc(result)
//     .then(function(newResult) {
//         console.log("The new result: " + result);
//     });
// });
