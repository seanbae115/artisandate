import React, {Component} from 'react';
import './home.css';
import { Link } from "react-router-dom";


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        // this.handleGetStarted = this.handleGetStarted.bind(this);
    }

    render(){
        return (
            <div className="full-page">
                <div className="splash-image"/>
                <div className="gradient x`valign-wrapper">
                    <div className="row centerPage">
                        <div className="col s-12 center-align">
                            <div className="grey-text text-darken-3"><h2>Planning a date is hard.</h2></div>
                            <div className="white-text need-ideas"><h3>Need ideas?<br/>We've got you covered.</h3></div>
                            <div className="row">
                                <div className="col s12 center-align">
                                    <Link to='/signup-page' className="btn home-btn">Sign Up</Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 center-align">
                                    <Link to='/signin-page' className="btn home-btn">Sign In</Link>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col s12 center-align">
                                        <Link to = '/location-page' className="btn home-btn">Get Started</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}