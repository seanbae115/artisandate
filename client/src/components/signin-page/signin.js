import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { renderInput } from '../../helpers';
import { signIn } from '../../actions';

class SignInPage extends Component {

    handleSignIn(values) {
        this.props.signIn(values).then(() => {
            if(this.props.auth){
                this.props.history.push(`/location-page/`);
            }
        });
    }

    render(){
        var noAccountStyle = {
            'marginTop': '20px'
        };
        var containerStyle = {
            'height': '100vh',
            'width': '100vw'
        };
        var h3Style = {
            'marginTop': '0rem'
        }
        return ( 
            <div className="grey lighten-4" style={containerStyle}>
                <div className="row">
                    <form onSubmit={this.props.handleSubmit(this.handleSignIn.bind(this))}>
                        <h3 className='center-align' style={h3Style}>Sign In</h3>
                        <div className='col s8 offset-s2'>
                            <Field name='email' component={renderInput}/>
                            <Field name='password' type="password" component={renderInput} />
                        </div>
                        <div className="row">
                            <div className='col s12 center-align'>
                                <button className='btn amber darken-3'>Sign In</button>
                            </div>
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

function mapStateToProps(state) {
    return {
        auth: state.user.auth,
        email: state.user.email,
        error: state.user.error
    }
}

SignInPage = reduxForm({
    form: 'signin-form',
    validate: validate
})(SignInPage);

export default connect(mapStateToProps, {signIn})(SignInPage);
