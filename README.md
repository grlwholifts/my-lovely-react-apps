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
- [ https://blog.pusher.com/css-modules-react/ ]

### Day 8
- Components in React have lifecycles; lifecycle methods: to have data at any level of app; Phases of React App: mounting, updating, unmounting
- Methods:
    - constructor(): not necessary to call, sets state directly inside constructor
    - getDerivedStateFromProps(): enables component to update internal state for changes in state, triggers on first render; when we receive updates props, compares props to current state
    - shouldComponentUpdate: receives next props and next state, compare _next_ with _prev_, return _false_ if don't want to change; alternative: use pure components
    - render(): takes jsx code and renders it to the DOM, only required method
    - getSnapshotBeforeUpdate(): read access to the DOM before change is committed, get current values and return that value in final update hook
    - componentDidMount(): fires on first render i.e. when component mounts, good place to get data from external database like Firebase
    - componentDidUpdate(): get external data, don't update data inside this or you get a infinite loop
    - componentDidUnmount(): fires when component is unmounted
- creating new todo app :DDD -- added components, addition and deletion of todo's, added click events

#### Resources for Day:
[ https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ ]
[ https://materializecss.com/getting-started.html ]

### Day 9
- Todo app completed! UwU [ will add a whole app description in app's readme that will include features and all]
- how webpages load? : Browser makes an initial request to the server to load `/home`, server responds with `index.html`
- React is built to load single page applications : they help to decrease load time(no refreshing)
- how do we load multiple page applications then?!
		- the _app.js_ components sits as a base and all the components like _home.js, about.js_ load over it
		- when request and the req doesnt go to server but is intercepted in between by the react router and
		- stops request to going to server and injects the component we need over it(app.js) i.e. /about
- starting new web-app MyPokeTimes! eee [ will add a whole app description in app's readme that will include features and all]
- BrowserRouter uses `react-router-dom` module
- it helps to load several components using _Route_ ( found in `react-router`) path in the _app.js_ component

#### Resources for Day:
[ - CDN link for _materializecss_ at: https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css ]

### Day 10
- use _NavLink_ and _Link_ from `react-router-dom` to stop sending requests to server; each page is not loaded again and again, but only the component is loaded
- different from anchor tag [ <a> </a> ] in that way(doesn't reload)
- using NavLink helps to show current/active state of the loaded page other than basic _a=href_ (as is shown using _Link_)in console --> this helps to add custom design using the available parameters to the current/active page

### Day 11
- Router attaches `props` info automatically to the components like "/contact"(which use _NavLink_); if we pass the `props` in Contact.js class component , the Router will automatically load the information to the console, eg:history (and other parameters)
- BrowserRouter attaches property to the Route components only and not any other component like _Navbar_
- redirect pages using `setTimeout(path, state)` function that takes two argument, 1: change of props via anonymous function, 2: time(in ms)

### Day 12
- higher order components help to wrap the components with superpowers
-  `withRouter`--> (a _higher order component_ which gives access to various properties)
- return `withRouter(navbar)` to wrap the component and apply the properties to that component --> _supercharged_ component

### Day 13
- `Rainbow.js` helps to randomize color selection from array and assign a random colour to the `About.js` component
- `Rainbow.js` is a manually written HOC
- it returns props and changed color of the class wrapped (in the original about.js, it gives about.js a new superpower)
- in about.js, export is wrapped in Rainbow
- using `routing` components --> programmable redirects

#### Resources for Day:
[ - https://reactjs.org/docs/higher-order-components.html ]

### Day 14
- rest api --> show dyanamic database to our users
- _jsonplaceholder.com_ --> gives api endpoints to use in our apps
- http request library : `axios` [ install as `npm install axios` ]
- helps to go out and fetch data from an exernal Resources (could use `fetch` instead of axios
)
- use lifecycle hook `componnetdidmount` (refer axios parameters inside it) --> make `Home.js` a fucntional component to use lifecycle hook
- `axios.get` is asynchronous--> takes some time to get database
- return a `promise` which waits for a signal(of above request completion) and then loads the relevant stuff
- `.then` method operates when you get a promise i.e. the job is complete --> is used inside `axios.get`
- `response` from the `axios` is then sliced using `slice` --> show only relevant stuff
- `data` property inside `response` object helps to add posts
- `postlist` cycles through the list of posts (if they are present--> checks length) from state and puts them in cards seperately
- part of URL that can change --> `route parameters`
- usually see them on URL for indivisual records eg: _mysite.com/users/yoshi2k1_   _mycookingsite.com/recipes/2345_
- in `app.js` we are expecting a _route path_ with dyanamic id like : `/:path_id` which will connect to the component `Post.js`
- in `post.js`, we identify the `route param (here:id)` so that we can output the associated post to that id(route param)
- use `props.match.params.<name of param>` to match that `post_id` in `componentDidMount` lifecycle hook
- to output the certain post page for each post dyanamically, get the `post_id` dyanamically and associate the post with it
- the `link` tag from `react-router-dom` helps to link the `span` title in `home.js` to the individual post page dyanamically
- use `+` in `get` method of `axios` to fetch the exact id match from the posts
- use the same logic as used in `home.js` to build the post page i.e. length and all 

#### Resources for Day:
[ - https://jsonplaceholder.typicode.com/posts ]
