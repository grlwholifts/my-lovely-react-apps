import React from 'react';

//class Ninjas extends Component{
	//render(){
	    //console.log(this.props);

	    //<div>Name: {this.props.name}</div>
		//<div>Age: {this.props.age}</div>
		//<div>Belt: {this.props.belt}</div>

	    //const { name, age, belt } = this.props;

const Ninjas = ({ninjas}) => {

	const ninjaList = ninjas.map(ninja => {
		if (ninja.age > 19){
			return(
		    	<div className="ninja" key={ninja.id}>
			        <div>Name: {ninja.name}</div>
			        <div>Age: {ninja.age}</div>
			        <div>Belt: {ninja.belt}</div>
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

//optional code for ternary operator
//const Ninjas = ({ninjas}) => {
//	return(
//		<div className="ninja-list">
//			{
//				ninjas.map(ninja => {
//					return ninja.age > 20 ? (
//				    	<div className="ninja" key={ninja.id}>
//					        <div>Name: {ninja.name}</div>
//					        <div>Age: {ninja.age}</div>
//					        <div>Belt: {ninja.belt}</div>
//				    	</div>
//					) : null;
//			}
//		</div>
//	)
//}

export default Ninjas
