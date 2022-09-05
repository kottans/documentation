---
id: code-review
title: How to Conduct A Helpful Code Review
---

As a reviewer consider the following guidelines:

- [How to Do Code Reviews Like a Human (Part One)](https://mtlynch.io/human-code-reviews-1/) /
- [How to Do Code Reviews Like a Human (Part Two)](https://mtlynch.io/human-code-reviews-2/) /
- [PR Code Review Phrase Book](https://gist.github.com/OleksiyRudenko/e6f573d7aca2cc854ccce6087cfe7138)

## General requirements

The code is written for other people to read and to contribute to the code base comfortably.
We also want our code to be maintainable and scalable.

The majority of recommendations in the next, tasks-specific section,
are also universal and are put there just for quick reference in the context
of a specific task.

### Pull-request template

PRs should have proper name (as per task name), should contain link to working demo (if applicable) and to code. Advise your peer to fix or complete missing parts.

### User interface testing

- Make sure to test the demo properly
- Please check that all interactive elements are visually indicated (by changing cursor form, background etc.)

### Code formatting

- `console.log` statements should not be left in final version of the code, unless it's part of the functionality
- Fix irregular indentations and remove redundant empty lines.
- Put an empty line at the end of every file. [Reason](https://stackoverflow.com/questions/729692/why-should-text-files-end-with-a-newline?noredirect=1&lq=1). Tune your code editor's settings so it does this for you.
- Unnecessary comments should be avoided. Find a way to express the intent through descriptive variable names or by abstracting parts of the code into properly named functions. Comments, if there are any, should explain "why", not "what".
- Use prettier.io for it to format the code for you. Turn it on in your code editor or install a plugin. 

### Code style

- Variable name should be camelCase:

```javascript
//Before:
let my_var, myothervar;

// After:
let myVar, myOtherVar;
```

- Variable names should not be too short or too obscure:
_(although some conventional shorthands are OK; e.g. `i` when looping through array by index, `x`/`y` to denote coordinates and other similar cases)_
```javascript
//Before:
let fns, a, b, cont, el, item;

// After:
let functionsList, card, rootElement, content, person, friend;
```

- Variable names should not be too general.

```javascript
//Before:
let arr, obj, str;

// After:
let cardsList, card, cardTitle;
```

- Functions denote actions hence their names should start with a verb.
  Variables containing strings, numbers, objects are normally nouns. 
  Boolean variables/functions start with `is`, `does`, `has` etc.
  A variable containing multiple entities and functions returning lists contain entity name in plural form.

```javascript
//Before:
function card() { }
const flipped = true;
const card = [];
const buildPresentation = () => [];

// After:
function flipCard() { }
const isFlipped = true;
const cards = [];
const buildPresentations = () => [];
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

Define well-named constants so that code reads as close to English as only possible. 

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
   cards.map((card) => {
     return card.name;
   });

   // After
   cards.map((card) => card.name);
   ```

1. Creating global variables by accident should be avoided. Variables should be always declared with let/const keywords:

   ```javascript
   // Before
   handleClick = (e) => {
     /* doSomething */
   };

   // After
   const handleClick = (e) => {
     /* doSomething */
   };
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
     `element.addEventListener(‘click’, (e) => { const target = e.target ;  /* do something */})`// After
     `element.addEventListener(‘click’, ({ target }) => {  /* do something */})`;
     ```

   - Arrow functions for callbacks and other small functions
   - Template literals (especially for string concatenation)

Read more:

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- ["Exploring ES6"](http://exploringjs.com/es6/)
- ["We have a Problem With Promises"](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)

---

## Typical mistakes

### POPUP TASK

**Markup**

First of all, check your markup in [validator](https://validator.w3.org/).

Your popup must be accessible from the keyboard: be sure you add styles on `:hover` and `:focus` states.

If you have a nested navigation use nested list of links:

```HTML
    <nav>
        <ul>
            <li><a href="#">Link-1</a></li>
            <li><a href="#">Link-2</a></li>
            <li><a href="#">Link-3</a></li>
            <li><ul>
                <li><a href="#"></a>Link-1</li>
                <li><a href="#"></a>Link-2</li>
                <li><a href="#"></a>Link-3</li>
                <li><a href="#"></a>Link-4</li>
            </ul></li>
            <li><a href="#">Link-5</a></li>
        </ul>
    </nav>
```

Navigation with one level can be used without lists:

```HTML
    <nav>
      <a href="#">Link content</a>
      <a href="#">Link content</a>
      <a href="#">Link content</a>
      <a href="#">Link content</a>
      <a href="#">Link content</a>
    </nav>
```

Read how and when to populate `alt` attribute value [Как правильно написать alt-текст](https://htmlacademy.ru/blog/articles/alt-text)

**Styles.**

Avoid styling by HTML tags except you add base styles. [Reason](https://frontstuff.io/you-need-to-stop-targeting-tags-in-css)

Watch [the video](https://www.youtube.com/watch?v=E6kLaaQFctU&t=413s) to find out how to hide checkbox in right way.

Avoid using `!important` in your styles.

### DOM API

**DOM manipulation in loops.**

Adding elements to DOM from a loop is a bad practice. A browser will run reflow and repaint for every element in the loop. Instead, you can:

1. Use `append` method, which can add several elements in one operation.
2. Create some wrapper, add your items to the wrapper and then add it to DOM. It will be one operation.
3. Clone current container. Add items to a container and then replace your old container with a new one. But be aware of event listeners.
4. Use `innerHTML` instead.

**Use of `window.event` property**
[`window.event`](https://developer.mozilla.org/en-US/docs/Web/API/Window/event) is not universally supported and should be avoided. Notably fails in Firefox with error message "window.event is undefined". Use `event` passed to event handler function:

```javascript
// Before
someElement.addEventListener("click", function () {
  const value = event.target.value;
  // do something
});

//After
someElement.addEventListener("click", function (event) {
  const value = event.target.value;
  // do something
});

// Even better - with ES6 features (arrow functions and destructuring)
someElement.addEventListener("click", ({ target }) => {
  const value = target.value;
  // do something
});
```

**Event delegation**

Do not assign an event listener to every similar element.
Instead, add listener to their shared container (parent)
and use `event.target` to identify a specific item the event
happened with.

**Relying on DOM structure**

Don't use constructions like `children[0]`, `firstElementChild`, `parentNode`, `nextSibling`, etc. In such way, you rely on the order of DOM elements. So in case when you will have changed design - your code will be broken. Which is bad, obviously. Use `querySelector` or `closest`, if in event, instead.

**Changing styles with JS**

Don't use inline style changing - `element.style`. In most cases this is a bad approach for several reasons:

1. First of all, a browser will apply such styling for each line separately/ Which means, that every such line of code will be a reason for running of calculations of a page and for drawing it, so you can receive a performance problem. Read about reflow and repaint.
2. This is an imperative way, you need to write declarative and describe what your code does, not how. This will make your code shorter and easier to maintain.
3. Reuse of code. Saying, you will need to rotate some other stuff - you will add a similar line to another part of an application. Which is not right because of DRY.

So, replace such parts with CSS classes. You can use `classList` to manipulate them.

Separation of responsibility: JS is for logic, CSS - for styling.

**Handling changes**

`keyUp` handles not all input types (try pasting text via context menu instead of typing)

### A Tiny JS World -- (pre-OOP)

_Relates to [Building a Tiny JS World](https://github.com/kottans/frontend/blob/master/tasks/js-pre-oop.md) task._

1. Men and women belong to the same biological species.
1. `prototype`-based or ES2015/ES6 `class` syntax aren't used.
1. Code is [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), which means that whenever you see a pattern in your code it should be optimized. Examples:
   1. `print(dog); print(cat); etc ... ` should be refactored employing `Array.forEach` as the least.
   1. `` `${obj.legs}; ${obj.name}; etc...` `` (yes, strings are also code) must be refactored employing appropriate `Array` methods
1. `Object` methods like `keys`, `values`, `entries` shouldn't be used when a particular order is required as these do not guarantee any particular order of keys/values. Same refers to `for...of` and `for...in` when applied to objects.
   Hint: List explicitly the properties used to form an object presentation string.

### OO JS (Frogger)

Relates to
[Object-Oriented JavaScript](https://github.com/kottans/frontend/blob/master/tasks/js-oop.md) task.

A. Minimal requirements to meet:
1. employ ES6 features like `const`, `let` etc. (with exclusion of ES6 `class` syntax)
1. the code is very [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
1. Requirements regarding **Constants**:
   1. all numbers like block dimensions, initial locations are defined as constants
   1. every number that has a semantic purpose (like those listed above) should be defined as constants; think of how your code **reads** - the closer to plain English the better
   1. there are core constants and derived (calculated) constants
      (e.g. `const FIELD_WIDTH = BLOCK_WIDTH * BLOCKS_NUMBER;`)
   1. arrays of constants also qualify as constants
      (e.g. `const INITIAL_POSITIONS = [1,2,3,4].map(rowNumber => rowNumber * BLOCK_HEIGHT);`)
   1. const objects help organizing and structure const data even better
      (e.g. `const PLAYER_CONF = { initialPosition: {x: 1, y: 5}, sprite: '...', ...etc... };`
1. Requirements regarding **OOP**:
   1. properties common for some classes are generalized into a base class
      (e.g. there is `Character` base class, which is extended by `Enemy` and `Player` classes)
   1. class extension is implemented using `Subclass.prototype = Object.create(Superclass.prototype)`,
      not `Subclass.prototype = new Superclass(params);`;
      [Useful resource](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
   1. classes do not refer to any global variables, like global variable `player`, which is an instance of `Player` class
      (referring to global constants and globals provided by the gaming platform like `Resources` is OK);
      Hint: pass instance of a game object (or objects) as an argument to other game objects they need to interact with
   1. Separation of Concerns principle is followed
      (e.g. `update` method only updates character coordinates and
      doesn't contain any **inline** code to check e.g. collisions; calling other methods from `update` is legitimate)
1. Most common mistakes
  1. Make sure `target = condition ? valueWhenConditionTrue : valueWhenConditionFalse` is used instead of
     `condition ? target = valueWhenConditionTrue : target = valueWhenConditionFalse`;
     [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### OOP Exercise

Relates to
[OOP Exercise](https://github.com/kottans/frontend/blob/master/tasks/js-post-oop.md).

1. Minimal requirements to meet:
   1. Implement base classes for child classes to inherit shared properties from.
   1. Employ default parameters' values where appropriate
   1. Each species is represented with its own class
   1. There is no need to specify species at instantiation yet species are printed
   1. A class constructor's signature should be very specific as to what parameters they expect to receive 
   1. Classes for species that do not have hands by natural design
      do not consequently have `hands` or any equivalent property
   1. All inhabitants are stored in a container (array or object - decide which is better for further manipulations)
   1. [OOP, SOLID and DRY](https://github.com/OleksiyRudenko/a-tiny-JS-world/blob/master/README.md#learn-on-your-own)
      principles are intensively employed
1. Optional level up (not required to implement):
   1. Friends list is a list of objects refs to other inhabitants rather than just names (strings)
   1. Cat-woman class is built employing composition rather
      than inheritance only
1. Bonus:
   1. `toString` magic method; when implemented `print(inhabitant)`
      does the job as `.toString` is called implicitly
   1. when `this.constructor.name` is used properly there is no need to specify `species` property explicitly

Helpful resources:
- [ES6 classes cheat-sheet](https://gist.github.com/OleksiyRudenko/672d39b08d9d0da4e179aca49876c58b)
- [Levelling skills up on Tiny JS World](https://github.com/OleksiyRudenko/a-tiny-JS-world#leveling-your-skills-up)

### Friends App

Common mistakes:

- Single responsibility - your functions should do only one job. As an example function in which you fetch users should only fetch them and not render, transform or process them in other ways. All these things should be done in another place, outside your function. The same applied to the sort function, which usually does all types of sorting 😉
- You should handle fetch response status - [https://www.tjvantoll.com/2015/09/13/fetch-and-errors/](https://www.tjvantoll.com/2015/09/13/fetch-and-errors/)
- Don’t use names as arr, array, data or etc. They to generic. Don’t use things like sortingByABC and sortingByZYX - it’s unclear and just weird. `user1` and `user2` - don't use numbers in names. Just don't :) `friendsArr` also a bad idea - you show data type in the variable name and in JS it’s redundant
- Prefer template strings to “createElement” API
- Your template strings which contain layouts should have indentations as in HTML
- When you need to decide which sort of condition was selected, prefer `value` of `input` instead “check classname of pressed element”, or “compare pressed element to saved element” etc. You can have value `female`, get value and then just use it
- Don’t overuse global variables, keep data that you are using closest as possible to the place where you using it. As an example, a request URL can be inside a function that sends a request
- Redundant comments - don’t use stuff ‘———————————‘ or “here I will sort my array”. The first one is ugly, second - redundant because the reviewer will understand that you do sort, from your code. The only situation in which you should use comments is when you need to describe why something is going on and this is 1% of all situations :)
- Please, doublecheck english wordings. Use code spellchecker, etc.
- Don't use nested ternaries. They hard to read

**Please also consider next**

_Sorting logic_

You don't need things like `sortAscendingFullName` and `sortDescendingFullName`, because you can have only one function, which will sort by name. For this, you can concatenate the name and full name into one value somewhere.

Than, you don't need `sortAscending` and `sortDescending` functions.

> ⚠️ Please, consider next more like pseudocode and not like the source of copy-paste. You should find a better solution on your own.

> Regarding naming - feel free to use compareNames and compareSurnames if you like.

It is much simpler code when you will write something like this:

```js
const compareAge = (firstFriend, secondFriend) => {
  return firstFriend.dob.age - secondFriend.dob.age;
};
```

Then, also as an example, you can have:

```js
const ageSorters = {
  descending: () => {
    friends.sort((a, b) => compareAge(b, a));
  },
  ascending: () => {
    friends.sort(compareAge);
  },
};
```

And use it like this:

```js
myForm.addEventListener("change", ({ target: radioButton }) => {
  if (radioButton.name === AGE) {
    ageSorters[radioButton.value]();
  }

  if (radioButton.name === NAME) {
    nameSorters[radioButton.value]();
  }
});
```

Which, possibly, can be simplified to:

```js
myForm.addEventListener("change", ({ target: radioButton }) => {
  const sorter =
    radioButton.name === AGE
      ? ageSorters[radioButton.value]
      : nameSorters[radioButton.value];

  sorter();
});
```

And that's all :)

1. You have separated the logic of sorting into two separate domains - sorting by age and sorting by name and moved everything into separately mapped handlers. So you don't need to write endless `if ... else` checks. Instead, you are using declarative code.
2. Because of this you don't have a place for "misprinting"
3. You don't pass any strings as arguments anywhere, which is antipattern in general. And with object keys in particular.

_Premature optimization_

And don't do premature optimization. As an example [here](https://wiki.c2.com/?PrematureOptimization) TLDR: You write code for humans, not machines.

So, the quote from the article above:

1. Make it work.
2. Make it right - the code is readable and every idea is expressed.
3. Make everything work.
4. Make everything right.
5. Use the system and find performance bottlenecks.
6. Use a profiler in those bottlenecks to determine what needs to be optimized.
7. Make it fast. You maintained unit tests, right? Then you can refactor the code mercilessly in order to improve the performance.

And remember, the best way to speed up the review, is to fix errors prior to review. 90% of errors are shared - go thru closed PRs with Friends App and check discussions there. You will find places with the same mistakes

---

## Video

Watch a video below for **Kottans code review basics intro**

(1h13m23s, narrated in Russian)

[![Kottans p2p course intro](./img/yt-kottans-p2p-creview.png)](https://youtu.be/zq9w09qXrOk)
