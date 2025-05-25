let headings = document.getElementsByTagName('h1')

// "headings" is an `Array Like Object`, which is called 'HTMLAllCollection'
console.log(headings) //HTMLAllCollection
console.log(headings.innerHTML) //it is 'undefined'
console.log(headings[1].innerHTML)

let heading3 = document.querySelector("h3")
console.log(heading3)
console.log(heading3.innerHTML)

// ============ Dark/Light Mode =================
let darkBtn = document.getElementById("darkBtn")
let lightBtn = document.getElementById("lightBtn")

darkBtn.addEventListener("click", function () {
    document.body.style.background = "black"
    document.body.style.color = "white"
})

lightBtn.addEventListener("click", () => {
    document.body.style.background = "white"
    document.body.style.color = "black"
})

function bgDark(){
    document.body.style.background = "black"
    document.body.style.color = "white"
}
function bgLight(){
    document.body.style.background = "white"
    document.body.style.color = "black"
}

// ============ Hide/Show Mode =================
let hideShowText1 = document.getElementById("hideShowText1")
let hideShowText2 = document.getElementById("hideShowText2")
let hideShowBtn = document.getElementById("hideShowBtn")

hideShowBtn.addEventListener("click", function () {
    hideShowText1.removeAttribute("hidden")
    hideShowText2.setAttribute("hidden", true)

})

// ============= Review =====================
let reviewContainer = document.getElementById("reviewContainer")
let reviewInput = document.getElementById("reviewInput")
let reviewBtn = document.getElementById("reviewBtn")

reviewBtn,addEventListener("click", ()=>{
    let inputValue = reviewInput.value;
    let paragraph = document.createElement("p");
    paragraph.innerText = inputValue;
    reviewContainer.appendChild(paragraph);
    reviewInput.value = ""

})

// ============ Delete =================
let delText = document.getElementById("delText")
let delInput = document.getElementById("delInput")
let delBtn = document.getElementById("delBtn")

delInput.addEventListener("keyup",function(){
    if(delInput.value == "DELETE"){
        delBtn.removeAttribute("disabled")
    }
    else{
        delBtn.setAttribute("disabled", true)
    }
})

delBtn.addEventListener("click", ()=>{
    delText.style.display = "none";
    delInput.value = "";

})