const container = document.getElementById("grid");
const reset = document.getElementById("reset");

function drawGrid(numCols=16) {
    container.style.setProperty('grid-template-columns', `repeat(${numCols}, 1fr)`);
    for (let i=0; i < numCols ** 2; i++){
    
        let cell = document.createElement("div");
        //cell.style.backgroundColor = 'blue';
        cell.id = i;        
        container.appendChild(cell);

 }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function randomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    return (`rgb(${red}, ${green}, ${blue})`)
}

function minusTenColor(originalRgba) {
    let redd = originalRgba[0];
    let greenn = originalRgba[1];
    let bluee = originalRgba[2];
    
    if (redd < 1) {
        redd = 10;
    }
    if (greenn < 1) {
        greenn = 10;
    }
    if (bluee < 1) {
        bluee = 10;
    }

    redd = Math.floor(redd - (redd * 0.1));
    greenn = Math.floor(greenn - (greenn * 0.1));
    bluee = Math.floor(bluee - (bluee * 0.1));

    if (redd < 0) {
        redd = 0;
    }
    if (greenn < 0) {
        greenn = 0;
    }
    if (bluee < 0) {
        bluee = 0;
    }
    return (`rgba(${redd}, ${greenn}, ${bluee}, 1)`)
}

function trimAndParseInt (rgbaItem) {
    let trimItem = rgbaItem.trim();
    trimItem = parseInt(trimItem);
    return trimItem;
}

function draw(numCols=16){
    for (let j = 0; j < numCols ** 2; j++) {
    const element = document.getElementById(`${j}`);
 
function findRGB(extract) {
    let start = extract.indexOf("(") + 1;
    let end = extract.indexOf(")");
    let colors = extract.slice(start, end).split(",");
    colors = colors.map(trimAndParseInt);
    return colors;
}
    
    element.addEventListener("mouseover", event => {
        let myDivObjBgColor = window.getComputedStyle(element).backgroundColor;
        
        let rgba = findRGB(myDivObjBgColor);
        let sumRgba = rgba.reduce((a, b) => a + b, 0);
        if (sumRgba === 0) {
         element.style.backgroundColor = randomColor();
        } else {
            
            console.log(findRGB(myDivObjBgColor));
            element.style.backgroundColor = minusTenColor(rgba);
        }
    });
    
    }}
    



reset.addEventListener("click", fun);

function fun() {
    while (true){
    numCols = window.prompt("How many columns would you like?", "64");
    if (parseInt(numCols) > 100){
        window.alert("Sorry. 100 is the max");
        continue;

    } else {
        break;
    }

    }
    removeAllChildNodes(container);
    drawGrid(numCols);
    draw(numCols);
    
}

drawGrid(35);
draw(35);

