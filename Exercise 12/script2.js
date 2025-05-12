console.log("Script2.js initializing")

let boxes = document.querySelector(".container").children
console.log(boxes)

function getRandomColor(){
    let R = Math.ceil(Math.random()*255) // Random value for red
    let G = Math.ceil(Math.random()*255) // Random value for green
    let B = Math.ceil(Math.random()*255) // Random value for blue
    return `rgb(${R},${G},${B})` 
}


Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})