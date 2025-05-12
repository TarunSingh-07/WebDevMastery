document.querySelector(".container").innerText
'Hey I am a box\nHey I am a box'

document.querySelector(".container").outer
undefined

document.querySelector(".container").outerHTML
'<div class="container">\n        <div class="box">Hey I am a box</div>\n        <div class="box">Hey I am a box</div>\n    </div>'

document.querySelector(".container").tagName
'DIV'

document.querySelector(".container").nodeName
'DIV'

document.querySelector(".container").textContent
'\n        Hey I am a box\n        Hey I am a box\n    '
document.querySelector(".container").hidden
false

document.querySelector(".container").hidden = true

document.querySelector(".container").innerHTML = "Hey I am Tarun"
'Hey I am Tarun'
