import React from 'react';

function Ninjas(){
         console.log(this.props);
    return(
        <div className="ninja">
        <div>{ this.props.name }</div>
        <div>{this.props.age}</div>
        <div>{this.props.belt}</div>
        </div>
    )
}

export default Ninjas