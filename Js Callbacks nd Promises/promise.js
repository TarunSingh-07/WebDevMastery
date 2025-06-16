console.log('This is promises');


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    console.log(a);

    if (a < 0.5) {
        reject("The random number is less than 0.5")
    }
    else {
        setTimeout(() => {
            console.log("Yes i am done");
            resolve("Tarun")
        }, 2000);
    }
})

// prom1.then((result) => {
//     console.log(result);
// })
//     .catch((error) => {
//         console.log(error);
//     })


let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    console.log(a);
    if (a < 0.5) {
        reject("The random number is less than 0.5 againnnnn")
    }
    else {
        setTimeout(() => {
            console.log("Yes i am done again");
            resolve("Jinwoo")
        }, 1000);
    }
})

// let p3 = Promise.allSettled([prom1, prom2]) // Used to wait for all Promises to finish,no matter they reject or resolve and get their results.

// let p3 = Promise.race([prom1, prom2]) // Used to get the result of the first Promise that resolves or rejects. 


let p3 = Promise.all([prom1, prom2])
p3.then(a=>{
    console.log(a);
}).catch(err=>{
    console.log(err);
})