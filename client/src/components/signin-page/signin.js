import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { renderInput } from '../../helpers';
import { signIn } from '../../actions';
import "../../helpers/inputCardHelper.css"

class SignInPage extends Component {

    handleSignIn(values) {
        this.props.signIn(values).then(() => {
            if(this.props.auth){
                this.props.history.push(`/location-page/`);
            }
        });
    }

    render(){
        return (
            <div className="grey lighten-4 valign-wrapper input-card-container">
                <div className="row card-width">
                    <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
                        <div className="card white">
                            <div className="card-content">
                                <span className='card-title center-align signin-card-title'>Sign In</span>
                                <form onSubmit={this.props.handleSubmit(this.handleSignIn.bind(this))} className="center-align">
                                    <Field name='email' label="Email" component={renderInput}/>
                                    <Field name='password' type="password" label="Password" component={renderInput} />
                                    <button className='btn-large float-btn cyan'>Sign In</button>
                                    <p className="red-text center-align">{this.props.authError}</p>
                                </form>
                                <div className="card-action center-align">
                                    <span className='card-subtitle' style={{fontSize: "1.6rem"}}>Don't have an account?</span>
                                    <Link to='/signup-page' className='btn bottom-btn amber'>Create one</Link>
                                </div>
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
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.email) {
        error.email = 'please enter an email'
    } else if (values.email !== undefined && !values.email.match(validEmail)) {
        error.email = "Please enter a valid email address"
    }
    if (!values.password) {
        error.password = 'please enter a password'
    }

    return error;
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth,
        email: state.user.email,
        authError: state.user.error
    }
}

SignInPage = reduxForm({
    form: 'signin-form',
    validate: validate
})(SignInPage);

export default connect(mapStateToProps, {signIn})(SignInPage);
