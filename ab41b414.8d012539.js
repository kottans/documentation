(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(172)),i={id:"contribute",title:"How to Contribute"},c={id:"doc/contribute",title:"How to Contribute",description:"[![MIT Licensed][icon-mit]][license] [![Kottans-Frontend][icon-kottans]][kottans-frontend]",source:"@site/docs/doc/contribute.md",permalink:"/documentation/docs/doc/contribute",sidebar:"docs",previous:{title:"Endorsements",permalink:"/documentation/docs/doc/endorsements"},next:{title:"How to Conduct A Helpful Code Review",permalink:"/documentation/docs/doc/code-review"}},s=[{value:"Preparations",id:"preparations",children:[]},{value:"Task code lifecycle",id:"task-code-lifecycle",children:[{value:"Submit a task",id:"submit-a-task",children:[]},{value:"Open a pull request",id:"open-a-pull-request",children:[]},{value:"Codereview",id:"codereview",children:[]},{value:"Update your code and PR",id:"update-your-code-and-pr",children:[]},{value:"Merging the PR",id:"merging-the-pr",children:[]},{value:"FAQ:",id:"faq",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OleksiyRudenko/a-tiny-JS-world/blob/master/LICENSE.md"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/license-MIT-blue.svg",alt:"MIT Licensed"})))," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kottans/frontend"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/%3D(%5E.%5E)%3D-frontend-yellow.svg",alt:"Kottans-Frontend"})))),Object(o.b)("p",null,"Please, follow the guidelines below when submitting\na task code for review."),Object(o.b)("p",null,"It is expected that a task codebase lives in its own dedicated repo,\nand code copy is submitted to this repo for code review purposes.\nWhenever changes are required these are done in a dedicated task\nrepo, demo gets updated, and then code is copied into this\nrepo fork to update the PR."),Object(o.b)("p",null,"A student will benefit from having tasks code base in their own\ndedicated repos as this forms student's portfolio."),Object(o.b)("h2",{id:"preparations"},"Preparations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"fork this repository"),Object(o.b)("li",{parentName:"ul"},"clone your fork to your local machine:\n",Object(o.b)("inlineCode",{parentName:"li"},"git clone https://github.com/YOUR_USERNAME/frontend-2019-p2p.git")),Object(o.b)("li",{parentName:"ul"},"add this repository as an upstream:\n",Object(o.b)("inlineCode",{parentName:"li"},"git remote add upstream https://github.com/kottans/frontend-2019-p2p.git")),Object(o.b)("li",{parentName:"ul"},"in your local repository, add a folder with your github name under\n",Object(o.b)("inlineCode",{parentName:"li"},"submissions"))),Object(o.b)("h2",{id:"task-code-lifecycle"},"Task code lifecycle"),Object(o.b)("h3",{id:"submit-a-task"},"Submit a task"),Object(o.b)("p",null,"In your local repository:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"git checkout master"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"pull latest changes from upstream ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch:\n",Object(o.b)("inlineCode",{parentName:"p"},"git pull upstream master"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u26a0\ufe0f create new branch, name it according to task performed\n(aka feature branch): ",Object(o.b)("inlineCode",{parentName:"p"},"git checkout -b dom-api-task"),".\nIn this example feature branch is called ",Object(o.b)("inlineCode",{parentName:"p"},"dom-api-task"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"under your name folder, add a folder with task name (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"js-dom"),")\nand put your code into the folder"),Object(o.b)("p",{parentName:"li"},"See example file structure you are expected to have below:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"img/file-structure.png",alt:"File structure example"})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"commit your changes to newly created feature branch")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"push feature branch to your remote repository:\n",Object(o.b)("inlineCode",{parentName:"p"},"git push --set-upstream origin dom-api-task")))),Object(o.b)("h3",{id:"open-a-pull-request"},"Open a pull request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"open a pull-request from your repository to this repository\nvia GitHub web-interface"),Object(o.b)("li",{parentName:"ul"},"give a PR name according to the task name,\nalso change the PR message as appropriate\n(follow guidelines in the template)"),Object(o.b)("li",{parentName:"ul"},"make sure the PR doesn't contain irrelevant commits\nfrom your own other PRs or from other contributors.\nThis may happen if you branch off not from ",Object(o.b)("inlineCode",{parentName:"li"},"master"),"\nas previous section requires. You may find this\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://gist.github.com/OleksiyRudenko/8b3ddb664308de0634b53c525e551d8b"}),"Re-sync Fork With Upstream guide"),"\nhelpful to fix the issue.")),Object(o.b)("h3",{id:"codereview"},"Codereview"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"you will ",Object(o.b)("strong",{parentName:"li"},"require")," approvals from ",Object(o.b)("strong",{parentName:"li"},"at least two peers"),", so seek\nfor sufficient support.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"ask your peers for review in ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://t.me/joinchat/DmX0JBHVkEhV1us2HdMmpA"}),"FE Students chat"),",\npost a link to your PR as well"),Object(o.b)("li",{parentName:"ul"},"if for some reason there are no reviewers from p2p course available, you may ask your friends from outside the course for a review"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"you have to provide reviews")," on the same task to ",Object(o.b)("strong",{parentName:"li"},"at least 2 PRs")," of other students of p2p course once your PR is merged, using your learnings from merged PR code review"),Object(o.b)("li",{parentName:"ul"},"after finishing previous steps ask mentors for review in ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://t.me/joinchat/DmX0JAl-mh5W0jrWli8Ycw"}),"FE Questionarium chat")),Object(o.b)("li",{parentName:"ul"},"once the code review phase successfully finished and you have approval from other students, post a message in ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://t.me/joinchat/DmX0JBHVkEhV1us2HdMmpA"}),"FE Students chat"),": ",Object(o.b)("inlineCode",{parentName:"li"},"{ Here must be the name of your task } \u2014 #p2p-pr-done")," and add the link to your PR. This step is important, as it helps mentors to track your progress!")),Object(o.b)("p",null,"Code reviewers are expected to follow\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./code-review-guidelines.md"}),"code review guidelines"),"."),Object(o.b)("h3",{id:"update-your-code-and-pr"},"Update your code and PR"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before making any changes:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"read code reviewers' comments"),Object(o.b)("li",{parentName:"ul"},"answer questions if any"),Object(o.b)("li",{parentName:"ul"},"explain anything you are asked to explain\nas this gives an idea on your way of thinking and allows\nthe code reviewer to render an appropriate help"),Object(o.b)("li",{parentName:"ul"},"ask questions if anything in comments or recommendations\nis not clear")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Implementing changes:")),Object(o.b)("p",null,"\u26a0\ufe0f ",Object(o.b)("strong",{parentName:"p"},"DO NOT")," update PR (files in the PR) using github web editor as this often merges ",Object(o.b)("inlineCode",{parentName:"p"},"master")," and also breaks conversation threads"),Object(o.b)("p",null,"\u26a0\ufe0f ",Object(o.b)("strong",{parentName:"p"},"DO NOT")," merge ",Object(o.b)("inlineCode",{parentName:"p"},"master")," into your feature branch, because this will create an additional commit. If you need to updare your branch with files from master, use ",Object(o.b)("inlineCode",{parentName:"p"},"git rebase")," instead."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"when implementing changes according to the changes request,\nconsider cross-checking the entire code base for similar\nsituation and fix as appropriately. Do not expect code reviewers\nto attract your attention to every single line of code that\nrequires similar fix. Please, take care of your peers for reciprocity"),Object(o.b)("li",{parentName:"ul"},"implement changes in your ",Object(o.b)("strong",{parentName:"li"},"task dedicated repo")," and ",Object(o.b)("strong",{parentName:"li"},"update demo"),"\nand commit"),Object(o.b)("li",{parentName:"ul"},"copy changed files to this repo fork feature branch and commit"),Object(o.b)("li",{parentName:"ul"},"push feature branch to your remote p2p repo to update your PR:\n",Object(o.b)("inlineCode",{parentName:"li"},"git push origin dom-api-task"),"\n(use actual feature branch name)"),Object(o.b)("li",{parentName:"ul"},"supplement commits with messages that give an idea of what's inside\nof the commit without looking into it.\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://chris.beams.io/posts/git-commit/"}),"How to Write a Git Commit Message"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Go to your PR on github and let code reviewers know your are done:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"resolve conversations you believe you have elaborated on")),Object(o.b)("li",{parentName:"ul"},"make sure you answered questions and gave proper explanations where\nrequired (do not resolve those conversations until you have a feedback\nfrom a code reviewer)"),Object(o.b)("li",{parentName:"ul"},"if any conversations remain unresolved let reviewers\nknow your're done explicitly (e.g. write a comment mentioning\na code reviewer using ",Object(o.b)("inlineCode",{parentName:"li"},"@"),")")),Object(o.b)("h3",{id:"merging-the-pr"},"Merging the PR"),Object(o.b)("p",null,"PR can be merged by repo maintainers only. When you have required code reviews completed and all code reviewers have approved requested changes, just mention two or three mentors for them to merge approved PR into ",Object(o.b)("inlineCode",{parentName:"p"},"master"),"."),Object(o.b)("h3",{id:"faq"},"FAQ:"),Object(o.b)("p",null,"Q: Why just pushing a commit with changes is not sufficient?"),Object(o.b)("p",null,"A: It is not a rare case that changes are introduced in more\nthan one commit. So it is important to let reviewers know\nthey should not expect any further commits. ",Object(o.b)("strong",{parentName:"p"},"C")," is for care."))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,c({ref:t},l,{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);