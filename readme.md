# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById selects a single html element with its id name. Since ids are unique, there shouldn't be more than one single html element with that id. But even if there are multiple html elements with the same id then it will return the first one. The main thing is it returns a single element.

The getElementsByClassName selects all html elements that have the same class name. It returns a html collection and it can be acccessed just like we access arrays with its indexing like this - [0]

The querySelectors also selects a single element but it can be used to select html elements using both id and classname. It takes the id and class name input as a string and just like css selectors. for example if I have to select this html element -  <section class="hero">, I can do this - document.querySelector('.hero') just like how we select a html element in css. For this html element - <section id="hero"> , document.querySelector('#hero') I can select like this. So querySelector can be used to select with both id and class name. 

and the querySelectorAll selects multiple html elements and returns a node list. Just like querySelector we can select html elements using both ids and class names. 

# How do you create and insert a new element into the DOM?

To create a new element I can use this code - let newEl = document.createElement('p') 
now the element is created but its in the memory and not in the DOM. we have to add it in a div or a html tag that is visible in the document by using appendChild. 
We can also append that in the main body tag as well like this - document.body.appendChild(newEl)
Also we can append this new created html element to any parent element like this - 
const parentElement = document.querySelector('.parent-el')
parentElement.appendChild(newEl)
There are more functions there that will let us to create and inster a new element into the DOM like inserBefore, prepend etc...


# What is Event Bubbling and how does it work?

Event Bubbling basically represents the way where a event driven chcild element goes upwords through its parents elements following the DOM tree structure. When an event occurs on an element (a click may be) it first returns on that targeted element. Then the same even propagates upward to its parent elements through the DOM tree, and also triggers the event listeners attached to those parents.
Also we can stop this using event.stopPropagation()


# What is Event Delegation in JavaScript? Why is it useful?

When there are multiple child elements inside a parent html element and if we want to handle the same event for all child elements, we can just directly add that event to its parent element and this approach of adding event listener is called event delegation. 

But in this case the parent listens for event on its children and handles the event through event bubbling.

Its useful in many ways, the most important use case is if the child elements are being added dynamically in the page. it also saves memory.

# What is the difference between preventDefault() and stopPropagation() methods?
The preventDefault() function stops the default event for a element. For example if we have a html form and clicks the submit button the default event of this submit button is to reload the page. We can stop this default event using this function.

The stopPropagation() is related to event bubbling where using this function we can just stop the event bubbling process. If some child elements of a parent element is being added dynamically and we want to set event listener to one specific child element we don't want that same event triggers for its parent as well. so we stop the event bubbling to go upwards through DOM tree by using this stopPropagation.

Basically preventDefault() prevents the default behaviour of an element and stopPropagation() stops the event from bubbling up the DOM tree so parent elements won't trigerred by the event.
