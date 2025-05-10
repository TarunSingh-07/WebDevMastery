console.log("Script.js initializing")

// let boxes = document.getElementsByClassName("box") // alternate of below code
let boxes = document.querySelector(".container").children 


// This will give a random number between 0 and 255, Also this use in to generate random RGB color
function getRandomColor(){
    let col1 = Math.ceil(Math.random()*255) // Random value for red
    let col2 = Math.ceil(Math.random()*255) // Random value for green
    let col3 = Math.ceil(Math.random()*255) // Random value for blue
    return `rgb(${col1},${col2},${col3}`  // combine them into an RGB color and return the random color
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})
