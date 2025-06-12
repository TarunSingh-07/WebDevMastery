let button = document.getElementById("btn")

// List of all Mouse Events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// click = single click
// dblclick = double click
// mousedown = mouse button pressed down

button.addEventListener("dblclick", ()=>{
    // alert("I was clicked. yayy!!")
    document.querySelector(".box").innerHTML = "<b>Wohoo am changed now </b>Enjoy your click!" // It changged the content of the box
})

// contextmenu = right click

button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by Right click please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key,e.keyCode) // It will log the key pressed and its keyCode
})


