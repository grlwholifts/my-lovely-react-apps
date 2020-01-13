import React from 'react';
import './Ninjas.css';
/*
class Ninjas extends Component{
	render(){
	    console.log(this.props);
	    <div>Name: {this.props.name}</div>
		<div>Age: {this.props.age}</div>
		<div>Belt: {this.props.belt}</div>
	    const { name, age, belt } = this.props;
*/

const Ninjas = ({ninjas, deleteNinja}) => {

	const ninjaList = ninjas.map(ninja => {
		if (ninja.age > 0){
			return(
		    	<div className="ninja" key={ninja.id}>
			        <div>Name: {ninja.name}</div>
			        <div>Age: {ninja.age}</div>
			        <div>Belt: {ninja.belt}</div>
					<button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
		    	</div>
			)
		} else {
			return null
		}
	})
	return(
		<div className="ninja-list">
			{ninjaList}
		</div>
	)
}

/*
optional code for ternary operator
const Ninjas = ({ninjas}) => {
	return(
		<div className="ninja-list">
			{
				ninjas.map(ninja => {
					return ninja.age > 20 ? (
				    	<div className="ninja" key={ninja.id}>
					        <div>Name: {ninja.name}</div>
					        <div>Age: {ninja.age}</div>
					        <div>Belt: {ninja.belt}</div>
				    	</div>
					) : null;
			}
		</div>
	)
}
*/

export default Ninjas
