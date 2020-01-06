import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component{
	state = {
		ninjas : [
			{ name: "Ruchika", age:20, belt:"black", id:1 },
			{ name: "Nikhil", age:19, belt:"red", id:2 },
			{ name: "Purnika", age:27, belt:"yellow", id:3 },
		]
	}
	render(){
		return (
		    <div className="App">
			    <h1>My first lovely React App!</h1>
			    <Ninjas ninjas={this.state.ninjas} />
		    </div>
		);
	}
}

export default App;
