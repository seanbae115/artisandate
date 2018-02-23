import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { renderInput } from '../../helpers';
import NavBar from '../nav-bar/navBar';

class SignInPage extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    login() {
        const serverRoute = "http://localhost:8000/login";
        const request = axios.post()
    }

    render(){
        var noAccountStyle = {
            'marginTop': '20px'
        };
        return ( 
            <div>
                <NavBar/>
                <div className="container amber">
                    <div className="card grey lighten-1">
                        <div className="card-content">
                            <form>
                                <h3 className='center-align'>Sign In</h3>
                                <label>Email</label>
                                <Field id='email-signin' name='email' value='email' type="text" component={renderInput}/>
                                <label>Password</label>
                                <Field id='password-signin' name='password' value='password' type="password" component={renderInput}/>
                                <div className='center-align'>
                                    <Link to='/location-page' id='signIn' className='btn amber darken-3' type='submit'>Sign In</Link>
                                </div>
                            </form>
                        </div>
                        <div className='no-account container center-align' style={noAccountStyle}>
                            <h4 className='col s12'>Don't have an account?</h4>
                            <div>
                                <Link to='/signup' className='btn green'>Create one</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SignInPage = reduxForm({
    form: 'signin-form'
})(SignInPage);

export default connect(null, {})(SignInPage);
