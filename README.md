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

### Day 5
im backkkk after a long time, finally yes
- used props instead of harcoding helps to have a resuable set of data; it allows receiving of all the data just using one reference prop in each component; just like `App.js` defines data to be sent and `Ninjas.js`(component) receives all instances of that data by using props only once
- outputted many instances of a same attritbutes in following ways: 
	- either write each attribute set singly ( just like for each object in a class ) 
	- or make a  list ( that will automatically output the data serially )
- in `App`, used `state` method to make an array of prop-attributes to store the data instances serially; referred to these attributes by their collective name (`ninjas`) in `render` method to display on the DOM
- in `Ninjas`, destructured props using `const` keyword to reference props-attributes sequentially in the component
- used `map` method to output the prop-list in a sequential manner 
	- divided data into small html chunks of prop-attributes for each instance
	- mapped them like objects using arrow function
	- added a sequence identifier `key` using `id` attribute(any unique attirbute)

#### Resources for Day: 
- [ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment ]

### Day 6
- `container component` : contains state, contains lifecycle hooks, not concerned with UI, use classes to create, methods like render are available; `ui component` : doesn't contain state, receive data from props, only concerned with UI, use functions to create
- for eg: for a form, use `container` to store data, for navbar, use `UI` to show styles and represent data for user
- make a functional/ UI component (`Ninjas.js`) using `const` keyword and `arrow function`, passing `props` in that function and removing any state/render methods, `this` keyword (because no class is there) used previously
- use conditional outputting to filter the props instances : if / ternary
- improve the code formatting by wrapping dyanamic data under return method only
