import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Phones from '../../assets/images/phones.png';
import NavBar from '../nav-bar/navBar'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return ( 
            <div>
                <NavBar/>
                <div className="container amber">
                    <div className="card grey lighten-1">
                        <div className="card-content">
                            <form>
                                <h3 className='center-align'>Sign In</h3>
                                <label>Email</label>
                                <input id='email-signIn' name='email' type="text"/>
                                <label>Password</label>
                                <input id='password-signIn' name='password' type="password"/>
                                <div className='center-align'>
                                    <Link to='/location-page' id='signIn' className='btn amber darken-3' type='button'>Sign In</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}