

let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0

function increment() {
    // count = count + 1
    count += 1
    // countEL.innerHTML = count

    countEL.textContent = count

}



//Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    
//Google node.textContent on MDN to change innerHTML 

function save() {
    let counterStr = count + " - "
    // saveEL.innerHTML = counterStr
    saveEL.textContent += counterStr

    // countEL.innerHTML = 0
    countEL.textContent = 0
    count = 0


}