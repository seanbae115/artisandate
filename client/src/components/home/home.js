import React, {Component} from 'react';
import './home.css';
import { Link } from "react-router-dom";


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="full-page">
                <div className="splash-image"/>
                <div className="gradient"/>
                <div className="center-page center-align">
                    <h2 className="grey-text text-darken-3">Planning a date is hard.</h2>
                    <h3 className="white-text">Need ideas?<br/>We've got you covered.</h3>
                    <Link to='/signup-page' className="btn home-btn">Sign Up</Link>
                    <Link to='/signin-page' className="btn home-btn">Sign In</Link>
                </div>
            </div>
        )
    }
}