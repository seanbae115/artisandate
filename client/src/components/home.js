import React, {Component} from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/home.css';
import {NavLink} from "react-router-dom";
import Phones from '../assets/images/phones.png';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleGetStarted = this.handleGetStarted.bind(this);
    }

    render(){
        return (
            <div className="container amber">
                <div className="row row-height-75">
                    <div className="hero-image">
                        <div className="hero-image-container amber">
                            <div>
                                <div className="grey-text text-darken-3">Planning a date is hard.</div>
                                <div className="white-text need-ideas">Need ideas?<br/>We've got you covered.</div>
                                <div className="button">
                                    {/*div will be a <NavLink to="/choose-location*/}
                                    <div onClick={this.handleGetStarted} className="btn-large blue get-started-button">Get Started</div>
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
    )
    }
}