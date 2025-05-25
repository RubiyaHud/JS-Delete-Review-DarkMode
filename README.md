### `getElementsByTagName`
A method in the Document Object Model (**DOM**) used to retrieve a live `HTMLCollection` of all elements in the document (or within a specific parent element) that have the specified tag name. Commonly used in **JavaScript** to manipulate or access multiple elements like all `<p>` or `<div>` tags.
#### Example:
```
let headings = document.getElementsByTagName('h1')
console.log(headings.innerHTML) //it is 'undefined'
console.log(headings[1].innerHTML)
```
#### Output:
![image](https://github.com/user-attachments/assets/fa32ef65-7926-40e7-ac20-d29416bcd6b3)

### `HTMLCollection`
An `array-like`, live collection of DOM elements. It is returned by methods like `getElementsByTagName()` or `getElementsByClassName()`. Unlike a true array, it does not have all array methods (like map() or forEach()), but we can access elements by index or name.

### `querySelector`
"A smart tool that finds the first HTML element that matches a CSS selector — like asking the page, ‘Who’s the first one wearing this style?’"
#### Example:
```
let heading3 = document.querySelector("h3")
console.log(heading3)
console.log(heading3.innerHTML)
```
#### Output:
![image](https://github.com/user-attachments/assets/72a13d83-16fd-4b36-bcf6-9c0dfc43a97b)

### `addEventListener`
"A way to attach a tiny helper to an element that patiently waits for something to happen—like a `click`, `hover`, or `keypress`—and then jumps into action exactly when needed."
#### Common Events `addEventListener` Can Handle:
