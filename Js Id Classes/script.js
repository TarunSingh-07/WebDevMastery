console.log("Hello World");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"  
console.log(document.querySelector(".box"));  // cant use this to select multiple elements


document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "blue"
})


document.querySelector("body").contains(document.querySelector(".container")) // return "true" because container is inside body
document.querySelector("body").contains(document.querySelector(".box")) // return "true" because box is inside body
document.querySelector(".container").contains(document.querySelector("body")) // return "false" because body is not inside container