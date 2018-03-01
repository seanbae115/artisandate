import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class OurApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const containerStyle = {
            'height': 'auto',
            'width': '100vw'
        };
        return (
            <div className="grey lighten-4 valign-wrapper" style={containerStyle}>
                <div className="row">
                    <div className="col s12">
                        <div className="card white">
                            <div className="card-content">
                                <h3 className='card-title center-align'>Welcome to Artisan Date</h3>
                                <div className="row">
                                    <div className="col s12 center-align">
                                        <h4>About Our Application</h4>
                                        <h5>Our application is a simplified and condensed date itinerary creator. Through the use of multiple web technologies, we provide a plethora of local options for a full night of entertainment.</h5>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="col s12 center-align">
                                        <h4>Technologies Implemented</h4>
                                        <h5>Javascript</h5>
                                        <h5>React.js</h5>
                                        <h5>Redux.js</h5>
                                        <h5>Materialize</h5>
                                        <h5>NPM</h5>
                                        <h5>Node.js</h5>
                                        <h5>Express.js</h5>
                                        <h5>Passport.js</h5>
                                        <h5>MySQL</h5>
                                        <h5>Yelp API</h5>
                                        <h5>Google API</h5>
                                        <h5>Amazon Web Services</h5>
                                    </div>

                                    <div className="col s12 center-align">
                                        <Link to='/ourteam-page' className='btn amber darken-3'>Our Team</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}