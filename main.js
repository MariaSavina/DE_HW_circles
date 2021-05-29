const container = document.getElementById("container")
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var svgNS = svg.namespaceURI;

function newCircle(event){
    let circle = document.createElementNS(svgNS, "circle")
    circle.setAttribute("cx", event.offsetX)
    circle.setAttribute("cy",  event.offsetY)
    circle.setAttribute("r",Math.floor(Math.random() * (50 - 10 + 1)) + 10)
    circle.setAttribute("fill", '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase())
    container.appendChild(circle)
}

container.addEventListener("click", e => {
    newCircle(e)
})