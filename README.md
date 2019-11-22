# my-lovely-react-apps

Tryna learn react bcz atoms in my life don't.

## Dear Github Repository, today I learnt : 

### Day 1
- the difference between ES5 and ES6 versions (constructor/function method)
- what is `babel.js`, `webpack`, `ESlint`
- added `node-modules`, presets and plugins for local development environment (not using official React Environment by Facebook as of now)
- converted a file `main.js` from ES5 to ES6 as `output.js` using babel transpiler
- couldn't update `package.json` tho :P

### Day 2
- how to set up my first react component using CDN, `react.production.min.js`, `react-dom.production.min.js` and `babel standalone` on my local host
- syntax of JSX, refers to JS + XML
- working of `state` and `render()` functions
- inside `state`: define properties of the UI, similiar to a class object properties in a basic JS class
- inside `render()`: using `div` to wrap whole JS code, JS code used for dyanamic input like `{ i am a dyanamic input }`
- rendered the react DOM component by wrapping it in a `div`
- using `setState` to handle state in DOM events
- learned the scope of `this` reference in the class
- added events to the component using `arrow functions` and event variable
- monitored the working of code using React Developer Tools add-on in Firefox 70 

#### Resources for Day: 
- [ https://addons.mozilla.org/en-US/firefox/addon/react-devtools/?src=search ] 
- [ https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG ]
- [ https://reactjs.org/docs/cdn-links.html ]

### Day 3
- introduction to forms in React, defining `input` types, buttons and responsiveness to the UI
- preventing default action for a DOM event using `preventDefault()` function in JS, hence defining our own actions or response to the console
- defining property/attribute to the whole form instead of the single button i.e. responding for both [ if a user clicks on `submit` button ] and [ user presses `enter` key ]

### Day 4
- using `create-react-app` to get the official React template and development server, up and running
- it helps keep the code modular (nested components), has ES6 features by default, creates a development server and uses build tools to create optimized code
- started building `my-lovely-react-app-1` as a Single Page App; renders `index.html` page only, other pages are loaded as components references from the initial page
- removed _App.css, logo.svg, App.test.js_ and their references from _src_ folder to maintain simplicity
- created first component `Ninjas.js`, hard-coded the <div> elements like _Name_
- added `export default` to add the `import reference` to the `App.js` via RegEx addressing, nested using self closing HTML tag `<Ninjas />`
- used `props` to define cross-component reference, using `this.props.<attribute>` in 
- used `const` to define an array of above mentioned properties to be used locally in the specified component as `const { <x1>, <x2>, <x3> } = this.props;`

#### Resources for Day: 
- [ https://github.com/facebook/create-react-app ]
