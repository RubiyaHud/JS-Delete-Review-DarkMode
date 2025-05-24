let headings = document.getElementsByTagName('h1')

// "headings" is an `Array Like Object`, which is called 'HTMLAllCollection'
console.log(headings) //HTMLAllCollection
console.log(headings.innerHTML) //it is 'undefined'
console.log(headings[1].innerHTML)

let heading3 = document.querySelector("h3")
console.log(heading3)
console.log(heading3.innerHTML)
