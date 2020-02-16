- removeClassFromElement: 
  - create a function that takes in an element, and the class to remove from that element.
  - It should use the removeClass method, not toggle

- toggleClassOnElement: 
  - create a function that takes in an element and a class.
  - It toggles the class on the target element

- hideElements: 
  - create a function that takes in two parameters
  - The target, and the removal type.
    - hide: hides the element but doesn't remove it
    - removeChildren: removes all children elements from the target, but leaves the element there
    - removeSelf: erases the element itself

- addAttributeToElement: 
  - given an element, an attribute, and a value change the targetted element to the appropriate key/value
  - for example: addAttributeToElement('#test','hi','bye')
  - would make the #test element have an attribute 'hi' with a value of 'bye', like the following:
    - ```<div id="#test" "hi"="bye">```

- putPosInElement: 
  - given an element, grab that element's position
  - store the position inside the text of that element 
    - in the following format:
    - ```x: 30px<br>y: 50px```
    - Note the break element between the two.
  - It should also return an object with the values:
    - ```{x: 30, y: 50}```
    - note that there is no 'px' in this case


