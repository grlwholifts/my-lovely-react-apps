import React from "react";

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000)
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis dicta error in itaque, iure libero maxime quia, reiciendis tenetur unde veritatis, voluptatem? Ad consequuntur dicta esse ipsa magni obcaecati.</p>
        </div>
    )
}

export default Contact
