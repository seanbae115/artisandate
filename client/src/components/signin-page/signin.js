import React, { Component } from 'react';
import NavBar from '../nav-bar/navBar';
import { Link } from "react-router-dom";
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { renderInput } from '../../helpers';
import { signIn } from '../../actions';

class SignInPage extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    handleSignIn(values) {
        console.log('Sign In form submitted: ', values)
        this.props.signIn(values);
    }

    render(){
        const { handleSubmit } = this.props;

        var noAccountStyle = {
            'marginTop': '20px'
        };
        return ( 
            <div>
                <NavBar/>
                <div className="container amber">
                    <div className="card grey lighten-1">
                        <div className="card-content">
                            <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                                <h3 className='card-heading'>Sign In</h3>
                                <Field name='email' component={renderInput}/>
                                <Field name='password' type="password" component={renderInput} />
                                <div className='center-align'>
                                    <button className='btn amber darken-3'>Sign In</button>
                                </div>
                            </form>
                        </div>
                        <div className='no-account container center-align' style={noAccountStyle}>
                            <h4 className='col s12'>Don't have an account?</h4>
                            <div>
                                <Link to='/signup-page' className='btn green'>Create one</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values) {
    const error = {};

    if (!values.email) {
        error.email = 'please enter an email'
    }
    if (!values.password) {
        error.password = 'please choose a password'
    }

    return error;
}

SignInPage = reduxForm({
    form: 'signin-form',
    validate: validate
})(SignInPage);

export default connect(null, {signIn})(SignInPage);
