---
id: code-review
title: How to Conduct A Helpful Code Review
---
Consider following links:
- [How to Do Code Reviews Like a Human (Part One)](https://mtlynch.io/human-code-reviews-1/) /
  [Code review по-человечески (часть 1)](https://habr.com/en/post/340550/)
- [How to Do Code Reviews Like a Human (Part Two)](https://mtlynch.io/human-code-reviews-2/) /
  [Code review по-человечески (часть 2)](https://habr.com/ru/post/342244/)
- [PR Code Review Phrase Book](https://gist.github.com/OleksiyRudenko/e6f573d7aca2cc854ccce6087cfe7138)


## Formatting, Style, Manual Testing

### Pull-request template
PRs should have proper name (as per task name), should contain link to working demo (if applicable) and to code. Advise your peer to fix or complete missing parts.

### User interface testing
- Make sure to test the demo properly
- Please check that all interactive elements are visually indicated (by changing cursor form, background etc.) 

### Code formatting
- `console.log` statements should not be left in final version of the code, unless it's part of the functionality
- Please advise your peer to fix irregular indentations and remove redundant empty lines.
- Please advise your peer to put newline at the end of every file.
- Unnecessary comments should be avoided. Advise your peer to find a way to express their intent through expressive variable names or by abstracting part of the code into properly named function.
- Magic numbers are [bad](https://stackoverflow.com/questions/47882/what-is-a-magic-number-and-why-is-it-bad)



### Code style

- Variable name should be camelCase:  
```javascript
//Before:  
let my_var, myothervar;

// After:
let myVar, myOtherVar;
```
- Variable names should not be too short or too  obscure:
```javascript
//Before: 
let fns, a, b, cont;

// After:
let functionsList, card, rootElement, content;
```

- Variable names should not be too general.
```javascript
//Before: 
let arr, str;

// After:
let cardsList, cardTitle;
```

- If-statement: multiple conditions can often be combined in one condition:
```javascript
//Before: 
if (a) return;
if (b) return;

// After:
if (a || b) return;
```

- Magic numbers in code should be avoided. For details see [this link](https://stackoverflow.com/questions/47882/what-is-a-magic-number-and-why-is-it-bad).


### DRY, KISS, SOLID  
Please read carefully about [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), [KISS](https://en.wikipedia.org/wiki/KISS_principle), [SOLID](https://en.wikipedia.org/wiki/SOLID), [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) principles and help your peers to find possibilities to apply them.



### JavaScript Features
1. `for` loops, `forEach`, `map` & other iterative forms  
Please pay attention to the content of loop body or callback. Frequent mistake is to make some operation in every iteration, which can be done only once outside loop.

1. `forEach` or `map`? Rule of thumb: if you are using the result of iteration, namely newly created array, use map. if you only need the side-effect of iteration, use forEach. `forEach` says "we don't use the result".

1. Read about the following Array methods on MDN and try to find opportunities to use them:
    - `Array.prototype.find`
    - `Array.prototype.concat`
    - `Array.prototype.includes`
    - `Array.prototype.join`

1. Array function body with brackets & return statement where it is not necessary
    ```javascript
    // Before
    myArray.map(item => { return item.name });

    // After
    myArray.map(item => item.name);
    ```

1. Creating global variables by accident should be avoided. Variables should be always declared with let/const keywords:

    ```javascript
    // Before
    handleClick = (e) => { /* doSomething */ }

    // After
    const handleClick = (e) => { /* doSomething */ }
    ```
1. Missing `“use strict”` directive increases risk of unexpected behavior (except for ES6 modules).

1. Promises & asynchronicity
    - not returning promises
    - using `async`/`await` where Promise is enough

1. Encourage your peers to use more ES6 features  
    - `let`/`const` instead of `var`
    - Destructuring
        ```javascript
        // Before
        `element.addEventListener(‘click’, (e) => { const target = e.target ;  /* do something */})`

        // After
        `element.addEventListener(‘click’, ({ target }) => {  /* do something */})`
        ```
    - Arrow functions for callbacks and other small functions
    - Template literals (especially for string concatenation)

Read more: 
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- ["Exploring ES6"](http://exploringjs.com/es6/)
- ["We have a Problem With Promises"](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)


---

## Typical mistakes

### DOM API

**event delegation**

**DOM manipulation in loops.**

Adding elements to DOM from a loop is a bad practice. A browser will run reflow and repaint for every element in the loop. Instead, you can: 
  1. Use `append` method, which can add several elements in one operation 
  2. Create some wrapper, add your items to the wrapper and then add it to DOM. It will be one operation. 
  3. Clone current container. Add items to a container and then replace your old container with a new one. But be aware of event listeners.
  4. Use `innerHTML` instead
  
**Use of `window.event` property**  
[`window.event`](https://developer.mozilla.org/en-US/docs/Web/API/Window/event) is not universally supported and should be avoided. Notably fails in Firefox with error message "window.event is undefined". Use `event` passed to event handler function:

```javascript
// Before
someElement.addEventListener('click', function() {
    const value = event.target.value;
    // do something
})

//After
someElement.addEventListener('click', function(event) {
    const value = event.target.value;
    // do something
})

// Even better - with ES6 features (arrow functions and destructuring)
someElement.addEventListener('click', ({ target }) => {
    const value = target.value;
    // do something
})
```

**Relying on DOM structure**

Don't use constructions like `children[0]`, `firstElementChild`, `parentNode`, `nextSibling`, etc. In such way, you rely on the order of DOM elements. So in case when you will have changed design - your code will be broken. Which is bad, obviously. Use `querySelector` or `closest`, if in event, instead.

**Changing styles with JS**

Don't use inline style changing - `element.style`. In most cases this is a bad approach for several reasons: 
  1. First of all, a browser will apply such styling for each line separately/ Which means, that every such line of code will be a reason for running of calculations of a page and for drawing it,  so you can receive a performance problem. Read about reflow and repaint.  
  2. This is an imperative way, you need to write declarative and describe what your code does, not how. This will make your code shorter and easier to maintain. 
  3. Reuse of code. Saying, you will need to rotate some other stuff - you will add a similar line to another part of an application. Which is not right because of DRY. 
  - Separation of responsibility - JS for logic, CSS - for styling. 
  
  So, replace such parts classes. You can use `classList` to manipulate them.

**Handling changes**

`keyUp` handles not all input types (try pasting text via context menu instead of typing)


### OO JS (Frogger)

Relates to
[Object-Oriented JavaScript](https://github.com/kottans/frontend/blob/master/tasks/js-oop.md) task.

Minimal requirements to meet:
 * [ ] it is OK to employ ES6 features like `const`, `let` etc.
 * [ ] OO is implemented using JS prototype chain object model (**not** ES6 classes syntax)
 * Requirements re **Constants**:
   * [ ] all numbers like block dimensions, initial locations are defined as constants
   * [ ] there are core constants and derived constants
         (e.g. `const FIELD_WIDTH = BLOCK_WIDTH * BLOCKS_NUMBER;`)
   * [ ] arrays of constants are also constants
         (e.g. `const INITIAL_POSITIONS = [1,2,3,4].map(rowNumber => rowNumber * BLOCK_HEIGHT);`)
   * [ ] const objects help organizing and structure const data even better
         (e.g. `const PLAYER_CONF = { initialPosition: {x: 1, y: 5}, sprite: '...', ...etc... };`
 * Requirements re **OOP**:
   * [ ] properties common for some classes are generalized into a base class
         (e.g. there is `Character` base class, which is extended by `Enemy` and `Player` classes)
   * [ ] class extension is implemented using `Subclass.prototype = Object.create(Superclass.prototype)`,
         not `Subclass.prototype = new Superclass(params);`;
         [Useful resource](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
   * [ ] classes do not refer to any global variables, like global variable `player`, which is an instance of `Player` class
         (referring to global constants and globals provided by the gaming platform like `Resources` is OK);
         Hint: pass `Player` instance as an argument to every enemy
   * [ ] Separation of Concerns principle is followed
         (e.g. `update` method does only rendering and
         doesn't **contain** any inline code to check e.g. collisions)
   * [ ] the code is very [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
 * Most common mistakes
   * [ ] Make sure `target = condition ? valueWhenConditionTrue : valueWhenConditionFalse` is used instead of
         `condition ? target = valueWhenConditionTrue : target = valueWhenConditionFalse`;
         [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)


### OOP Exercise

Relates to
[OOP Exercise](https://github.com/kottans/frontend/blob/master/tasks/js-post-oop.md).

Minimal requirements to meet:
 * [ ] Implement a base class to inherit from
 * [ ] Employ default parameters
 * [ ] Each species is represented with its own class
 * [ ] No need to specify species at instantiation
 * [ ] Classes for species that do not have hands by natural design
       do not consequently have `hands` or any equivalent property
 * [ ] All inhabitants are stored in a container (array or object)
 * [ ] JS native features are intensively employed (`const`, `let`, `Array.map|join|forEach|...`, etc)
 * [ ] [OOP, SOLID and DRY](https://github.com/OleksiyRudenko/a-tiny-JS-world/blob/master/README.md#learn-on-your-own)
       principles are intensively employed

Optional level up (not required to implement):
 * [ ] Friends list is a list of objects refs rather than names (strings)
 * [ ] Cat-woman class is built employing composition rather
       than inheritance only

Bonus:
 * [ ] `toString` magic method; when implemented `print(inhabitant)`
       does the job as `.toString` is called implicitly
 * [ ] `this.constructor.name`; when used no need to store `species` property

[ES6 classes cheat-sheet](https://gist.github.com/OleksiyRudenko/672d39b08d9d0da4e179aca49876c58b)

---

## Video

Watch a video below for **Kottans code review basics intro**

(1h13m23s, narrated in Russian)

[![Kottans p2p course intro](./img/yt-kottans-p2p-creview.png)](https://youtu.be/zq9w09qXrOk)

