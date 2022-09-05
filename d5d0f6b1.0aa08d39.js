(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(9),r=(n(0),n(172)),o={id:"code-review",title:"How to Conduct A Helpful Code Review"},l={id:"doc/code-review",title:"How to Conduct A Helpful Code Review",description:"As a reviewer consider the following guidelines:",source:"@site/docs/doc/code-review.md",permalink:"/documentation/docs/doc/code-review",sidebar:"docs",previous:{title:"How to Contribute",permalink:"/documentation/docs/doc/contribute"},next:{title:"Philosophy",permalink:"/documentation/docs/doc/philosophy"}},s=[{value:"General requirements",id:"general-requirements",children:[{value:"Pull-request template",id:"pull-request-template",children:[]},{value:"User interface testing",id:"user-interface-testing",children:[]},{value:"Code formatting",id:"code-formatting",children:[]},{value:"Code style",id:"code-style",children:[]},{value:"DRY, KISS, SOLID",id:"dry-kiss-solid",children:[]},{value:"JavaScript Features",id:"javascript-features",children:[]}]},{value:"Typical mistakes",id:"typical-mistakes",children:[{value:"POPUP TASK",id:"popup-task",children:[]},{value:"DOM API",id:"dom-api",children:[]},{value:"A Tiny JS World -- (pre-OOP)",id:"a-tiny-js-world----pre-oop",children:[]},{value:"OO JS (Frogger)",id:"oo-js-frogger",children:[]},{value:"OOP Exercise",id:"oop-exercise",children:[]},{value:"Friends App",id:"friends-app",children:[]}]},{value:"Video",id:"video",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As a reviewer consider the following guidelines:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://mtlynch.io/human-code-reviews-1/"}),"How to Do Code Reviews Like a Human (Part One)")," /"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://mtlynch.io/human-code-reviews-2/"}),"How to Do Code Reviews Like a Human (Part Two)")," /"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://gist.github.com/OleksiyRudenko/e6f573d7aca2cc854ccce6087cfe7138"}),"PR Code Review Phrase Book"))),Object(r.b)("h2",{id:"general-requirements"},"General requirements"),Object(r.b)("p",null,"The code is written for other people to read and to contribute to the code base comfortably.\nWe also want our code to be maintainable and scalable."),Object(r.b)("p",null,"The majority of recommendations in the next, tasks-specific section,\nare also universal and are put there just for quick reference in the context\nof a specific task."),Object(r.b)("h3",{id:"pull-request-template"},"Pull-request template"),Object(r.b)("p",null,"PRs should have proper name (as per task name), should contain link to working demo (if applicable) and to code. Advise your peer to fix or complete missing parts."),Object(r.b)("h3",{id:"user-interface-testing"},"User interface testing"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Make sure to test the demo properly"),Object(r.b)("li",{parentName:"ul"},"Please check that all interactive elements are visually indicated (by changing cursor form, background etc.)")),Object(r.b)("h3",{id:"code-formatting"},"Code formatting"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"console.log")," statements should not be left in final version of the code, unless it's part of the functionality"),Object(r.b)("li",{parentName:"ul"},"Fix irregular indentations and remove redundant empty lines."),Object(r.b)("li",{parentName:"ul"},"Put an empty line at the end of every file. ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/729692/why-should-text-files-end-with-a-newline?noredirect=1&lq=1"}),"Reason"),". Tune your code editor's settings so it does this for you."),Object(r.b)("li",{parentName:"ul"},'Unnecessary comments should be avoided. Find a way to express the intent through descriptive variable names or by abstracting parts of the code into properly named functions. Comments, if there are any, should explain "why", not "what".'),Object(r.b)("li",{parentName:"ul"},"Use prettier.io for it to format the code for you. Turn it on in your code editor or install a plugin. ")),Object(r.b)("h3",{id:"code-style"},"Code style"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Variable name should be camelCase:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"//Before:\nlet my_var, myothervar;\n\n// After:\nlet myVar, myOtherVar;\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Variable names should not be too short or too obscure:\n",Object(r.b)("em",{parentName:"li"},"(although some conventional shorthands are OK; e.g. ",Object(r.b)("inlineCode",{parentName:"em"},"i")," when looping through array by index, ",Object(r.b)("inlineCode",{parentName:"em"},"x"),"/",Object(r.b)("inlineCode",{parentName:"em"},"y")," to denote coordinates and other similar cases)"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"//Before:\nlet fns, a, b, cont, el, item;\n\n// After:\nlet functionsList, card, rootElement, content, person, friend;\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Variable names should not be too general.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"//Before:\nlet arr, obj, str;\n\n// After:\nlet cardsList, card, cardTitle;\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Functions denote actions hence their names should start with a verb.\nVariables containing strings, numbers, objects are normally nouns.\nBoolean variables/functions start with ",Object(r.b)("inlineCode",{parentName:"li"},"is"),", ",Object(r.b)("inlineCode",{parentName:"li"},"does"),", ",Object(r.b)("inlineCode",{parentName:"li"},"has")," etc.\nA variable containing multiple entities and functions returning lists contain entity name in plural form.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"//Before:\nfunction card() { }\nconst flipped = true;\nconst card = [];\nconst buildPresentation = () => [];\n\n// After:\nfunction flipCard() { }\nconst isFlipped = true;\nconst cards = [];\nconst buildPresentations = () => [];\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If-statement: multiple conditions can often be combined in one condition:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"//Before:\nif (a) return;\nif (b) return;\n\n// After:\nif (a || b) return;\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Magic numbers in code should be avoided. For details see ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/47882/what-is-a-magic-number-and-why-is-it-bad"}),"this link"),".")),Object(r.b)("p",null,"Define well-named constants so that code reads as close to English as only possible. "),Object(r.b)("h3",{id:"dry-kiss-solid"},"DRY, KISS, SOLID"),Object(r.b)("p",null,"Please read carefully about ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"}),"DRY"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/KISS_principle"}),"KISS"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/SOLID"}),"SOLID"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it"}),"YAGNI")," principles and help your peers to find possibilities to apply them."),Object(r.b)("h3",{id:"javascript-features"},"JavaScript Features"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"for")," loops, ",Object(r.b)("inlineCode",{parentName:"p"},"forEach"),", ",Object(r.b)("inlineCode",{parentName:"p"},"map")," & other iterative forms\nPlease pay attention to the content of loop body or callback. Frequent mistake is to make some operation in every iteration, which can be done only once outside loop.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"forEach")," or ",Object(r.b)("inlineCode",{parentName:"p"},"map"),"? Rule of thumb: if you are using the result of iteration, namely newly created array, use map. if you only need the side-effect of iteration, use forEach. ",Object(r.b)("inlineCode",{parentName:"p"},"forEach"),' says "we don\'t use the result".')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Read about the following Array methods on MDN and try to find opportunities to use them:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Array.prototype.find")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Array.prototype.concat")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Array.prototype.includes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Array.prototype.join")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Array function body with brackets & return statement where it is not necessary"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Before\ncards.map((card) => {\n  return card.name;\n});\n\n// After\ncards.map((card) => card.name);\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Creating global variables by accident should be avoided. Variables should be always declared with let/const keywords:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Before\nhandleClick = (e) => {\n  /* doSomething */\n};\n\n// After\nconst handleClick = (e) => {\n  /* doSomething */\n};\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Missing ",Object(r.b)("inlineCode",{parentName:"p"},"\u201cuse strict\u201d")," directive increases risk of unexpected behavior (except for ES6 modules).")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Promises & asynchronicity"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"not returning promises"),Object(r.b)("li",{parentName:"ul"},"using ",Object(r.b)("inlineCode",{parentName:"li"},"async"),"/",Object(r.b)("inlineCode",{parentName:"li"},"await")," where Promise is enough"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Encourage your peers to use more ES6 features"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"let"),"/",Object(r.b)("inlineCode",{parentName:"p"},"const")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"var"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Destructuring"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Before\n`element.addEventListener(\u2018click\u2019, (e) => { const target = e.target ;  /* do something */})`// After\n`element.addEventListener(\u2018click\u2019, ({ target }) => {  /* do something */})`;\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Arrow functions for callbacks and other small functions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Template literals (especially for string concatenation)"))))),Object(r.b)("p",null,"Read more:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/airbnb/javascript"}),"Airbnb JavaScript Style Guide")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://exploringjs.com/es6/"}),'"Exploring ES6"')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html"}),'"We have a Problem With Promises"'))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"typical-mistakes"},"Typical mistakes"),Object(r.b)("h3",{id:"popup-task"},"POPUP TASK"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Markup")),Object(r.b)("p",null,"First of all, check your markup in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://validator.w3.org/"}),"validator"),"."),Object(r.b)("p",null,"Your popup must be accessible from the keyboard: be sure you add styles on ",Object(r.b)("inlineCode",{parentName:"p"},":hover")," and ",Object(r.b)("inlineCode",{parentName:"p"},":focus")," states."),Object(r.b)("p",null,"If you have a nested navigation use nested list of links:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-HTML"}),'    <nav>\n        <ul>\n            <li><a href="#">Link-1</a></li>\n            <li><a href="#">Link-2</a></li>\n            <li><a href="#">Link-3</a></li>\n            <li><ul>\n                <li><a href="#"></a>Link-1</li>\n                <li><a href="#"></a>Link-2</li>\n                <li><a href="#"></a>Link-3</li>\n                <li><a href="#"></a>Link-4</li>\n            </ul></li>\n            <li><a href="#">Link-5</a></li>\n        </ul>\n    </nav>\n')),Object(r.b)("p",null,"Navigation with one level can be used without lists:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-HTML"}),'    <nav>\n      <a href="#">Link content</a>\n      <a href="#">Link content</a>\n      <a href="#">Link content</a>\n      <a href="#">Link content</a>\n      <a href="#">Link content</a>\n    </nav>\n')),Object(r.b)("p",null,"Read how and when to populate ",Object(r.b)("inlineCode",{parentName:"p"},"alt")," attribute value ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://htmlacademy.ru/blog/articles/alt-text"}),"\u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c alt-\u0442\u0435\u043a\u0441\u0442")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Styles.")),Object(r.b)("p",null,"Avoid styling by HTML tags except you add base styles. ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://frontstuff.io/you-need-to-stop-targeting-tags-in-css"}),"Reason")),Object(r.b)("p",null,"Watch ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=E6kLaaQFctU&t=413s"}),"the video")," to find out how to hide checkbox in right way."),Object(r.b)("p",null,"Avoid using ",Object(r.b)("inlineCode",{parentName:"p"},"!important")," in your styles."),Object(r.b)("h3",{id:"dom-api"},"DOM API"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"DOM manipulation in loops.")),Object(r.b)("p",null,"Adding elements to DOM from a loop is a bad practice. A browser will run reflow and repaint for every element in the loop. Instead, you can:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"append")," method, which can add several elements in one operation."),Object(r.b)("li",{parentName:"ol"},"Create some wrapper, add your items to the wrapper and then add it to DOM. It will be one operation."),Object(r.b)("li",{parentName:"ol"},"Clone current container. Add items to a container and then replace your old container with a new one. But be aware of event listeners."),Object(r.b)("li",{parentName:"ol"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"innerHTML")," instead.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Use of ",Object(r.b)("inlineCode",{parentName:"strong"},"window.event")," property"),"\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/event"}),Object(r.b)("inlineCode",{parentName:"a"},"window.event")),' is not universally supported and should be avoided. Notably fails in Firefox with error message "window.event is undefined". Use ',Object(r.b)("inlineCode",{parentName:"p"},"event")," passed to event handler function:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// Before\nsomeElement.addEventListener("click", function () {\n  const value = event.target.value;\n  // do something\n});\n\n//After\nsomeElement.addEventListener("click", function (event) {\n  const value = event.target.value;\n  // do something\n});\n\n// Even better - with ES6 features (arrow functions and destructuring)\nsomeElement.addEventListener("click", ({ target }) => {\n  const value = target.value;\n  // do something\n});\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Event delegation")),Object(r.b)("p",null,"Do not assign an event listener to every similar element.\nInstead, add listener to their shared container (parent)\nand use ",Object(r.b)("inlineCode",{parentName:"p"},"event.target")," to identify a specific item the event\nhappened with."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Relying on DOM structure")),Object(r.b)("p",null,"Don't use constructions like ",Object(r.b)("inlineCode",{parentName:"p"},"children[0]"),", ",Object(r.b)("inlineCode",{parentName:"p"},"firstElementChild"),", ",Object(r.b)("inlineCode",{parentName:"p"},"parentNode"),", ",Object(r.b)("inlineCode",{parentName:"p"},"nextSibling"),", etc. In such way, you rely on the order of DOM elements. So in case when you will have changed design - your code will be broken. Which is bad, obviously. Use ",Object(r.b)("inlineCode",{parentName:"p"},"querySelector")," or ",Object(r.b)("inlineCode",{parentName:"p"},"closest"),", if in event, instead."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Changing styles with JS")),Object(r.b)("p",null,"Don't use inline style changing - ",Object(r.b)("inlineCode",{parentName:"p"},"element.style"),". In most cases this is a bad approach for several reasons:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"First of all, a browser will apply such styling for each line separately/ Which means, that every such line of code will be a reason for running of calculations of a page and for drawing it, so you can receive a performance problem. Read about reflow and repaint."),Object(r.b)("li",{parentName:"ol"},"This is an imperative way, you need to write declarative and describe what your code does, not how. This will make your code shorter and easier to maintain."),Object(r.b)("li",{parentName:"ol"},"Reuse of code. Saying, you will need to rotate some other stuff - you will add a similar line to another part of an application. Which is not right because of DRY.")),Object(r.b)("p",null,"So, replace such parts with CSS classes. You can use ",Object(r.b)("inlineCode",{parentName:"p"},"classList")," to manipulate them."),Object(r.b)("p",null,"Separation of responsibility: JS is for logic, CSS - for styling."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Handling changes")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"keyUp")," handles not all input types (try pasting text via context menu instead of typing)"),Object(r.b)("h3",{id:"a-tiny-js-world----pre-oop"},"A Tiny JS World -- (pre-OOP)"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Relates to ",Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/kottans/frontend/blob/master/tasks/js-pre-oop.md"}),"Building a Tiny JS World")," task.")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Men and women belong to the same biological species."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"prototype"),"-based or ES2015/ES6 ",Object(r.b)("inlineCode",{parentName:"li"},"class")," syntax aren't used."),Object(r.b)("li",{parentName:"ol"},"Code is ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"}),"DRY"),", which means that whenever you see a pattern in your code it should be optimized. Examples:",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"print(dog); print(cat); etc ... ")," should be refactored employing ",Object(r.b)("inlineCode",{parentName:"li"},"Array.forEach")," as the least."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"`${obj.legs}; ${obj.name}; etc...`")," (yes, strings are also code) must be refactored employing appropriate ",Object(r.b)("inlineCode",{parentName:"li"},"Array")," methods"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"Object")," methods like ",Object(r.b)("inlineCode",{parentName:"li"},"keys"),", ",Object(r.b)("inlineCode",{parentName:"li"},"values"),", ",Object(r.b)("inlineCode",{parentName:"li"},"entries")," shouldn't be used when a particular order is required as these do not guarantee any particular order of keys/values. Same refers to ",Object(r.b)("inlineCode",{parentName:"li"},"for...of")," and ",Object(r.b)("inlineCode",{parentName:"li"},"for...in")," when applied to objects.\nHint: List explicitly the properties used to form an object presentation string.")),Object(r.b)("h3",{id:"oo-js-frogger"},"OO JS (Frogger)"),Object(r.b)("p",null,"Relates to\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kottans/frontend/blob/master/tasks/js-oop.md"}),"Object-Oriented JavaScript")," task."),Object(r.b)("p",null,"A. Minimal requirements to meet:\n1. employ ES6 features like ",Object(r.b)("inlineCode",{parentName:"p"},"const"),", ",Object(r.b)("inlineCode",{parentName:"p"},"let")," etc. (with exclusion of ES6 ",Object(r.b)("inlineCode",{parentName:"p"},"class")," syntax)\n1. the code is very ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"}),"DRY"),"\n1. Requirements regarding ",Object(r.b)("strong",{parentName:"p"},"Constants"),":\n1. all numbers like block dimensions, initial locations are defined as constants\n1. every number that has a semantic purpose (like those listed above) should be defined as constants; think of how your code ",Object(r.b)("strong",{parentName:"p"},"reads")," - the closer to plain English the better\n1. there are core constants and derived (calculated) constants\n(e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"const FIELD_WIDTH = BLOCK_WIDTH * BLOCKS_NUMBER;"),")\n1. arrays of constants also qualify as constants\n(e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"const INITIAL_POSITIONS = [1,2,3,4].map(rowNumber => rowNumber * BLOCK_HEIGHT);"),")\n1. const objects help organizing and structure const data even better\n(e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"const PLAYER_CONF = { initialPosition: {x: 1, y: 5}, sprite: '...', ...etc... };"),"\n1. Requirements regarding ",Object(r.b)("strong",{parentName:"p"},"OOP"),":\n1. properties common for some classes are generalized into a base class\n(e.g. there is ",Object(r.b)("inlineCode",{parentName:"p"},"Character")," base class, which is extended by ",Object(r.b)("inlineCode",{parentName:"p"},"Enemy")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Player")," classes)\n1. class extension is implemented using ",Object(r.b)("inlineCode",{parentName:"p"},"Subclass.prototype = Object.create(Superclass.prototype)"),",\nnot ",Object(r.b)("inlineCode",{parentName:"p"},"Subclass.prototype = new Superclass(params);"),";\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"}),"Useful resource"),"\n1. classes do not refer to any global variables, like global variable ",Object(r.b)("inlineCode",{parentName:"p"},"player"),", which is an instance of ",Object(r.b)("inlineCode",{parentName:"p"},"Player")," class\n(referring to global constants and globals provided by the gaming platform like ",Object(r.b)("inlineCode",{parentName:"p"},"Resources")," is OK);\nHint: pass instance of a game object (or objects) as an argument to other game objects they need to interact with\n1. Separation of Concerns principle is followed\n(e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"update")," method only updates character coordinates and\ndoesn't contain any ",Object(r.b)("strong",{parentName:"p"},"inline")," code to check e.g. collisions; calling other methods from ",Object(r.b)("inlineCode",{parentName:"p"},"update")," is legitimate)\n1. Most common mistakes\n1. Make sure ",Object(r.b)("inlineCode",{parentName:"p"},"target = condition ? valueWhenConditionTrue : valueWhenConditionFalse")," is used instead of\n",Object(r.b)("inlineCode",{parentName:"p"},"condition ? target = valueWhenConditionTrue : target = valueWhenConditionFalse"),";\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"}),"Conditional (ternary) operator")),Object(r.b)("h3",{id:"oop-exercise"},"OOP Exercise"),Object(r.b)("p",null,"Relates to\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kottans/frontend/blob/master/tasks/js-post-oop.md"}),"OOP Exercise"),"."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Minimal requirements to meet:",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Implement base classes for child classes to inherit shared properties from."),Object(r.b)("li",{parentName:"ol"},"Employ default parameters' values where appropriate"),Object(r.b)("li",{parentName:"ol"},"Each species is represented with its own class"),Object(r.b)("li",{parentName:"ol"},"There is no need to specify species at instantiation yet species are printed"),Object(r.b)("li",{parentName:"ol"},"A class constructor's signature should be very specific as to what parameters they expect to receive "),Object(r.b)("li",{parentName:"ol"},"Classes for species that do not have hands by natural design\ndo not consequently have ",Object(r.b)("inlineCode",{parentName:"li"},"hands")," or any equivalent property"),Object(r.b)("li",{parentName:"ol"},"All inhabitants are stored in a container (array or object - decide which is better for further manipulations)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/OleksiyRudenko/a-tiny-JS-world/blob/master/README.md#learn-on-your-own"}),"OOP, SOLID and DRY"),"\nprinciples are intensively employed"))),Object(r.b)("li",{parentName:"ol"},"Optional level up (not required to implement):",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Friends list is a list of objects refs to other inhabitants rather than just names (strings)"),Object(r.b)("li",{parentName:"ol"},"Cat-woman class is built employing composition rather\nthan inheritance only"))),Object(r.b)("li",{parentName:"ol"},"Bonus:",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"toString")," magic method; when implemented ",Object(r.b)("inlineCode",{parentName:"li"},"print(inhabitant)"),"\ndoes the job as ",Object(r.b)("inlineCode",{parentName:"li"},".toString")," is called implicitly"),Object(r.b)("li",{parentName:"ol"},"when ",Object(r.b)("inlineCode",{parentName:"li"},"this.constructor.name")," is used properly there is no need to specify ",Object(r.b)("inlineCode",{parentName:"li"},"species")," property explicitly")))),Object(r.b)("p",null,"Helpful resources:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://gist.github.com/OleksiyRudenko/672d39b08d9d0da4e179aca49876c58b"}),"ES6 classes cheat-sheet")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/OleksiyRudenko/a-tiny-JS-world#leveling-your-skills-up"}),"Levelling skills up on Tiny JS World"))),Object(r.b)("h3",{id:"friends-app"},"Friends App"),Object(r.b)("p",null,"Common mistakes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Single responsibility - your functions should do only one job. As an example function in which you fetch users should only fetch them and not render, transform or process them in other ways. All these things should be done in another place, outside your function. The same applied to the sort function, which usually does all types of sorting \ud83d\ude09"),Object(r.b)("li",{parentName:"ul"},"You should handle fetch response status - ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.tjvantoll.com/2015/09/13/fetch-and-errors/"}),"https://www.tjvantoll.com/2015/09/13/fetch-and-errors/")),Object(r.b)("li",{parentName:"ul"},"Don\u2019t use names as arr, array, data or etc. They to generic. Don\u2019t use things like sortingByABC and sortingByZYX - it\u2019s unclear and just weird. ",Object(r.b)("inlineCode",{parentName:"li"},"user1")," and ",Object(r.b)("inlineCode",{parentName:"li"},"user2")," - don't use numbers in names. Just don't :) ",Object(r.b)("inlineCode",{parentName:"li"},"friendsArr")," also a bad idea - you show data type in the variable name and in JS it\u2019s redundant"),Object(r.b)("li",{parentName:"ul"},"Prefer template strings to \u201ccreateElement\u201d API"),Object(r.b)("li",{parentName:"ul"},"Your template strings which contain layouts should have indentations as in HTML"),Object(r.b)("li",{parentName:"ul"},"When you need to decide which sort of condition was selected, prefer ",Object(r.b)("inlineCode",{parentName:"li"},"value")," of ",Object(r.b)("inlineCode",{parentName:"li"},"input")," instead \u201ccheck classname of pressed element\u201d, or \u201ccompare pressed element to saved element\u201d etc. You can have value ",Object(r.b)("inlineCode",{parentName:"li"},"female"),", get value and then just use it"),Object(r.b)("li",{parentName:"ul"},"Don\u2019t overuse global variables, keep data that you are using closest as possible to the place where you using it. As an example, a request URL can be inside a function that sends a request"),Object(r.b)("li",{parentName:"ul"},"Redundant comments - don\u2019t use stuff \u2018\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2018 or \u201chere I will sort my array\u201d. The first one is ugly, second - redundant because the reviewer will understand that you do sort, from your code. The only situation in which you should use comments is when you need to describe why something is going on and this is 1% of all situations :)"),Object(r.b)("li",{parentName:"ul"},"Please, doublecheck english wordings. Use code spellchecker, etc."),Object(r.b)("li",{parentName:"ul"},"Don't use nested ternaries. They hard to read")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Please also consider next")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Sorting logic")),Object(r.b)("p",null,"You don't need things like ",Object(r.b)("inlineCode",{parentName:"p"},"sortAscendingFullName")," and ",Object(r.b)("inlineCode",{parentName:"p"},"sortDescendingFullName"),", because you can have only one function, which will sort by name. For this, you can concatenate the name and full name into one value somewhere."),Object(r.b)("p",null,"Than, you don't need ",Object(r.b)("inlineCode",{parentName:"p"},"sortAscending")," and ",Object(r.b)("inlineCode",{parentName:"p"},"sortDescending")," functions."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please, consider next more like pseudocode and not like the source of copy-paste. You should find a better solution on your own.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Regarding naming - feel free to use compareNames and compareSurnames if you like.")),Object(r.b)("p",null,"It is much simpler code when you will write something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const compareAge = (firstFriend, secondFriend) => {\n  return firstFriend.dob.age - secondFriend.dob.age;\n};\n")),Object(r.b)("p",null,"Then, also as an example, you can have:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const ageSorters = {\n  descending: () => {\n    friends.sort((a, b) => compareAge(b, a));\n  },\n  ascending: () => {\n    friends.sort(compareAge);\n  },\n};\n")),Object(r.b)("p",null,"And use it like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'myForm.addEventListener("change", ({ target: radioButton }) => {\n  if (radioButton.name === AGE) {\n    ageSorters[radioButton.value]();\n  }\n\n  if (radioButton.name === NAME) {\n    nameSorters[radioButton.value]();\n  }\n});\n')),Object(r.b)("p",null,"Which, possibly, can be simplified to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'myForm.addEventListener("change", ({ target: radioButton }) => {\n  const sorter =\n    radioButton.name === AGE\n      ? ageSorters[radioButton.value]\n      : nameSorters[radioButton.value];\n\n  sorter();\n});\n')),Object(r.b)("p",null,"And that's all :)"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"You have separated the logic of sorting into two separate domains - sorting by age and sorting by name and moved everything into separately mapped handlers. So you don't need to write endless ",Object(r.b)("inlineCode",{parentName:"li"},"if ... else")," checks. Instead, you are using declarative code."),Object(r.b)("li",{parentName:"ol"},'Because of this you don\'t have a place for "misprinting"'),Object(r.b)("li",{parentName:"ol"},"You don't pass any strings as arguments anywhere, which is antipattern in general. And with object keys in particular.")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Premature optimization")),Object(r.b)("p",null,"And don't do premature optimization. As an example ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://wiki.c2.com/?PrematureOptimization"}),"here")," TLDR: You write code for humans, not machines."),Object(r.b)("p",null,"So, the quote from the article above:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Make it work."),Object(r.b)("li",{parentName:"ol"},"Make it right - the code is readable and every idea is expressed."),Object(r.b)("li",{parentName:"ol"},"Make everything work."),Object(r.b)("li",{parentName:"ol"},"Make everything right."),Object(r.b)("li",{parentName:"ol"},"Use the system and find performance bottlenecks."),Object(r.b)("li",{parentName:"ol"},"Use a profiler in those bottlenecks to determine what needs to be optimized."),Object(r.b)("li",{parentName:"ol"},"Make it fast. You maintained unit tests, right? Then you can refactor the code mercilessly in order to improve the performance.")),Object(r.b)("p",null,"And remember, the best way to speed up the review, is to fix errors prior to review. 90% of errors are shared - go thru closed PRs with Friends App and check discussions there. You will find places with the same mistakes"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"video"},"Video"),Object(r.b)("p",null,"Watch a video below for ",Object(r.b)("strong",{parentName:"p"},"Kottans code review basics intro")),Object(r.b)("p",null,"(1h13m23s, narrated in Russian)"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://youtu.be/zq9w09qXrOk"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"./img/yt-kottans-p2p-creview.png",alt:"Kottans p2p course intro"})))))}b.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return n?i.a.createElement(m,l({ref:t},c,{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);