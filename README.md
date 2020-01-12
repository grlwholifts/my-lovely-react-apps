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
- inside `state`: define properties of the UI, similar to a class object properties in a basic JS class
- inside `render()`: using `div` to wrap whole JS code, JS code used for dynamic input like `{ i am a dyanamic input }`
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
- used props instead of hard-coding helps to have a reusable set of data; it allows receiving of all the data just using one reference prop in each component; just like `App.js` defines data to be sent and `Ninjas.js`(component) receives all instances of that data by using props only once
- outputted many instances of a same attributes in following ways: 
	- either write each attribute set singly ( just like for each object in a class ) 
	- or make a  list ( that will automatically output the data serially )
- in `App`, used `state` method to make an array of prop-attributes to store the data instances serially; referred to these attributes by their collective name (`ninjas`) in `render` method to display on the DOM
- in `Ninjas`, destructured props using `const` keyword to reference props-attributes sequentially in the component
- used `map` method to output the prop-list in a sequential manner 
	- divided data into small html chunks of prop-attributes for each instance
	- mapped them like objects using arrow function
	- added a sequence identifier `key` using `id` attribute(any unique attribute)

#### Resources for Day: 
- [ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment ]

### Day 6
- `container component` : contains state, contains lifecycle hooks, not concerned with UI, use classes to create, methods like render are available; `ui component` : doesn't contain state, receive data from props, only concerned with UI, use functions to create
- for eg: for a form, use `container` to store data, for nav-bar, use `UI` to show styles and represent data for user
- make a functional/ UI component (`Ninjas.js`) using `const` keyword and `arrow function`, passing `props` in that function and removing any state/render methods, `this` keyword (because no class is there) used previously
- use conditional outputting to filter the props instances : if / ternary
- improve the code formatting by wrapping dynamic data under return method only

### Day 7
- designed a React form to catch data entered by user and send it to the main `App` Component
- added form labels like _name, age, belt_ in html using `htmlFor` property and associated every _target.value_ to their respective state labels i.e. input to `name` label gets stored in 'name' state
- this makes using `id` property as a key helpful, to uniquely identify attribute to which the _target.value_ must be saved/assigned
- `onSubmit` function associated with `form` label(and not `button` label) helps to catch all the prompts i.e. button click AND enter key as a marker for completion of form/submission of data
- in `handleChange` function, the `set.State` method sets the [ <state of the target id> ] to the label value entered by the user, much like traversing the `state` array to find the matching `id` property i.e. [ 'name ] = name
- on submitting, the `handleSubmit` function prevents the default action of refreshing the page and outputs the state just entered by the user to the console
- for the incoming data from user, set `id` using random function from Math library for quick entry(or you can enter id manually/ or the id may be provided by the user itself)
- do not set the state of incoming data outside set.State function by using :  `this.ninjas.push(ninja)` statement(considered a bad practice, it overwrites the existing data)
- set state of incoming data inside the `set.State` function using local variable `let` which helps to create a new array based on attributes of the output
- `...` (spread operator) spreads the `state` array out into individual attributes and puts them into new array called `ninjas`( made using `let`) attribute by attribute, which makes a carbon copy of the `ninjas` array from state and then adds an instance of the new `ninja` entered by the user
- copy the new `ninjas` into `ninjas` of state (replacing it)
- pass `deleteninja` function as a prop to the `ninjas.js` and use it to set `onClick` property for the _delete_ button for separate ninjas
- cannot pass function with argument `ninja.id` in the property because it resembles the normal function call, must turn it into object by using anonymous arrow function; otherwise function will be automatically called and we only what it to be called on prompt i.e. by clicking the button
- in `deleteninja` function, pass `id` as a prop in _render_ method; use _filter_ method (as it is non-destructive) to filter the array directly and only output the prop-instances which return true for the given condition (here: `id` of ninja must be equal to the `id` of the clicked button)
- the virtual DOM compares the current and new changes received in the ninjas.js _jsx_ template as props and wherever it finds the difference, it updates to the DOM/browser
- use CSS in React: either define each css file (with same name as each file) or use _index.css_ for all files

#### Resources for Day: 
- [ https://www.youtube.com/redirect?event=video_description&v=IZ34vkfr97s&q=https%3A%2F%2Fblog.pusher.com%2Fcss-modules-react%2F&redir_token=uqMkDII-95hHsdNib8iy4zIjg-x8MTU3ODc0NTM3MEAxNTc4NjU4OTcw ]
