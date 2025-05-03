console.log("Hello World");

document.body.firstElementChild // first child element i.e container
document.body.firstElementChild.childNodes // child nodes i.e #text, Box 1, #text, Box 2, #text, Box 3, #text, Box 4, #text, Box 5, #text
document.body.firstElementChild.children // child elements i.e Box 1, Box 2, Box 3, Box 4, Box 5



document.body.firstElementChild.children[0] // first child element i.e Box 1

document.body.firstElementChild.children[3] // fourth child element i.e Box 4

document.body.firstElementChild.children[3].nextElementSibling // next sibling element i.e Box 5

document.body.firstElementChild.children[3].previousElementSibling // previous sibling element i.e Box 3

document.body.firstElementChild.children[3].previousSibling // previous sibling node i.e #text

document.body.firstElementChild.children[3].parentElement // parent element i.e Box 4's parent is container
document.body.firstElementChild.children[3].parentNode // parent node i.e Box 4's parent is container
document.body.firstElementChild.children[3].parentNode.parentNode // parent node i.e Box 4's grand parent is body

document.body.children[1].nextElementSibling // next sibling element i.e script.js