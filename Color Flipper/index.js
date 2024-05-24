const body = document.getElementsByTagName("body")

//function for the red, blue and green buttons and colors
function setColor(name) {
    body.style.backgroundColor = name;
}

//function for the random button and colors
function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

//combination of red green and blue random colors from declared variables in the function
    const color = `rgb(${red},${green},${blue})`

//Background color of the body will be changed because of the declared variable 'color'
    body.style.backgroundColor = color
}
