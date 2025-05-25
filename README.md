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
