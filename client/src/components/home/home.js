import React, {Component} from 'react';
import './home.css';
import { Link } from "react-router-dom";
import Phones from '../../assets/images/phones.png';
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
            <div>
                <NavBar/>
                <div className="container amber">
                    <div className="row row-height-75">
                        <div className="hero-image">
                            <div className="hero-image-container amber">
                                <div>
                                    <div className="grey-text text-darken-3">Planning a date is hard.</div>
                                    <div className="white-text need-ideas">Need ideas?<br/>We've got you covered.</div>
                                    <div className="button">
                                        <Link to='/signup-page' className="btn-large grey get-started-button">Sign Up</Link>
                                        <Link to='/login-page' className="btn-large green get-started-button">Sign In</Link>
                                        <Link to = '/location-page' className="btn-large blue get-started-button">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="top-phones amber"><img src={Phones} /></div>
                        </div>
                        <div className="bottom-phones-container amber">
                            <div className="bottom-phones">
                                <img src={Phones} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}