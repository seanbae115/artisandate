import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Phones from '../../assets/images/phones.png';
import TestImage from '../../assets/images/test.jpg';
import GitHub from '../../assets/images/github.png'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="container amber">
                    <h3 className='center-align'>OurTeam</h3>
                    <div className="card grey lighten-1">
                        <div className="card-content">
                            <div className="row">
                                <div className="col s6"><img className='responsive-img' src={TestImage} alt=""/></div>
                                <div className="col s6">
                                    <div className="container">
                                        <h4>Name:</h4>
                                        <h5>Jonathan Tiritilli</h5>
                                        <a href="TestRoute"><img className="responsive-img" src={GitHub}/></a>
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