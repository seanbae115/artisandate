import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Button extends Component {
    render(){

    return (
        <div className="button">
            <NavLink to="/summary" className="btn deep-purple">Continue</NavLink>
        </div>
    )}
}

export default Button;

//results button routes to summary
// summary buttons one creates an email
// 2.  Save to Calendar
// 3.  Routes to Home Page/Zip
//App contains the Routes
//<NavLink exact to={"/"} className='nav-link'>WELCOME</NavLink>