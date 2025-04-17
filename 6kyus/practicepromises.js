// function countNumbers(){
    
//     for(let i=1;i<=5;i++){
//         setTimeout( function(){
//             console.log(i)
//         },1000)
        
//     }
// }
// countNumbers();
//1. Create a function that counts from 1 to 5, with a 1-second delay between each number, using a callback to print each number.
// function counter(callback) {
//      callback= function(){
//         for(let i=1;i<=5;i++){
//            setTimeout( function(){
//             console.log(i)
//             },1000)
                    
//             } 
//     }
// return callback
// }
// counter();




// function counter(callback) {
//     callback = function () {
//         for (let i = 1; i <= 5; i++) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000); 
//         }
//     };
//     return callback; 

//     }
// counter()();


function counter(callback) {
    let i=1;
    function count(){
        if(i<=5){
            console.log(i);
            i++;
            setTimeout(count,i)
        }
    }
}