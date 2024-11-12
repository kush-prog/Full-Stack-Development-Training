// function rollNumber(num, delay, nextRoll){
//     setTimeout(() => {
//         console.log("Roll no. is: ", num);
//         if(nextRoll) nextRoll();
//     }, delay);
// }

// rollNumber(1, 2000, () => {
//     rollNumber(2, 2000, () => {
//         rollNumber(3, 2000, () => {
//             rollNumber(4, 1000, () => {
//             })
//         })
//     })
// });

// const promise = new Promise(function(resolve, reject) {
//     console.log("Promise started");
//     resolve("Promise resolved");
//     reject("Promise rejected");
// });

// promise.then(() => {
//     console.log("My first then");
// }).catch(() => {
//     console.log("My first catch");
// })

// function rollNumber(num, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Roll no. is: ", num);
//             resolve();
//         }, delay);
//     });
// }

// rollNumber(1, 2000)
//     .then(() => rollNumber(2, 2000))
//     .then(() => rollNumber(3, 2000))
//     .then(() => rollNumber(4, 1000))
//     .catch(() => console.log("Error in promise chain"));

// let promise = new Promise((resolve, reject) => {
//     resolve({user: "Kush", pass: '12345678'});
// })

// promise.then((data) => {
//     console.log(data);
//     return data;
// }).then ((res) => {
//     console.log(res.user);
// }).catch(() => {
//     console.log("Error in promise chain");
// }).finally(() => {
//     console.log("Promise finally executed");
// })


// Make a promise of orderFood with parameters of food name and time. Then amke a resturant function which will return the food name and the time also when it will be ready. Use the async and await method.

function orderFood(foodName, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order placed for: ", foodName);
            resolve(foodName);
        }, time);
    });
}

function restaurant(foodName, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food is ready: ", foodName);
            resolve(foodName);
        }, time);
    });
}

// orderFood("Pizza", 2000)
//     .then((data) => {
//         return restaurant(data, 3000);
//     })
//     .then((data) => {
//         console.log("Food served: ", data);
//     })
//     .catch(() => {
//         console.log("Error in promise chain");
//     })
//     .finally(() => {
//         console.log("Promise finally executed");
//     })

async function order(){
    const food = await orderFood("Pizza", 2000);
    const serve = await restaurant(food, 3000);
    console.log("Food served: ", serve);
}

order();


