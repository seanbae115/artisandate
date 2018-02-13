import React, {Component} from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/location_page.css';
import DateNightSmallPng from "../assets/images/date-night-small.png";

export default class LocationPageNav extends Component {
    render(){
        return (
    //      Not sure what to do with these jQuery things yet
    //      What exactly are they linking to?  and How to implement these in React?
    //        Where is .last and .next even located at?
    //         $('.button-collapse').sideNav();
    //     $('.btn').on('click', (event)=>{
    //         this.options[event.target.name] = event.target;
    //     });
    //     $('.last').on('click', (event)=>{
    //         //show last option
    //     });
    //     $('.next').on('click', (event)=>{
    //         //show next option
    //     });
    // })
            <nav>
                <div className="nav-wrapper amber">
                    <a href="index.html" className="brand-logo">
                        <img className='logoImg' src={DateNightSmallPng} alt="Date Night"/>
                    </a>
                    <a href="#!" data-activates="mobile-demo" className="button-collapse">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down text-transform-uppercase">
                        <li>
                            <a href="#">Account</a>
                        </li>
                        <li>
                            <a href="#">New Event</a>
                        </li>
                        <li>
                            <a href="#">History</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li>
                                <a href="#">Account</a>
                            </li>
                            <li>
                                <a href="#">New Event</a>
                            </li>
                            <li>
                                <a href="#">History</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                </div>
            </nav>
            )
        }
    }