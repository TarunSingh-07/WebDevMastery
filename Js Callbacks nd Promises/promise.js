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
        }, 3000);
    }
})

prom1.then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error);
    })