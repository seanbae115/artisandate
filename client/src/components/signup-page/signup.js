import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Phones from '../../assets/images/phones.png';
import NavBar from '../nav-bar/navBar';

export default class SignUp extends Component {
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
                                <h3 className='center-align'>Sign Up</h3>
                                <label>Email</label>
                                <input id='email' name='email' type="text"/>
                                <label>Password</label>
                                <input id='password' name='password' type="password"/>
                                <Link to='/login-page 'id='register' className='btn amber darken-3' type='button'>Sign Up</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}