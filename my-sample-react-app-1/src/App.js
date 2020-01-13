import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component{
	state = {
		ninjas : [
			{ name: "Ruchika", age:20, belt:"black", id:1 },
			{ name: "Nikhil", age:19, belt:"red", id:2 },
			{ name: "Purnika", age:20, belt:"yellow", id:3 },
		]
	}
	addNinja = (ninja) => {
		ninja.id = Math.random();
		let ninjas = [ ...this.state.ninjas, ninja];
		this.setState({
			ninjas: ninjas
		})
		console.log(this.state);
	}
	deleteNinja = (id) => {
		let ninjas = this.state.ninjas.filter(ninja => {
			return ninja.id !== id
		});
		this.setState({
			ninjas: ninjas
		})
		console.log(id);
	}
	componentDidMount() {
		console.log("component mounted wuhuu");
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("component updated");
		console.log(prevProps, prevProps);
	}

	render(){
		return (
		    <div className="App">
			    <h1>My first lovely React App!</h1>
			    <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
			    <AddNinja addNinja={this.addNinja}/>
		    </div>
		);
	}
}

export default App;
