import React, {Component} from 'react';
import './home.css';
import { Link } from "react-router-dom";
// import Phones from '../../assets/images/phones.png';
import NavBar from '../nav-bar/navBar';

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
                <div className="splash-image"></div>
                <NavBar/>
                <div className="gradient valign-wrapper">
                    <div className="row">
                        <div className="col s-12 center-align">
                            <div className="grey-text text-darken-3">Planning a date is hard.</div>
                            <div className="white-text need-ideas">Need ideas?<br/>We've got you covered.</div>
                            <div className="row">
                                <div className="col s12 center-align">
                                    <Link to='/signup-page' className="btn home-btn">Sign Up</Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 center-align">
                                    <Link to='/login-page' className="btn home-btn">Sign In</Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 center-align">
                                        <Link to = '/location-page' className="btn home-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}