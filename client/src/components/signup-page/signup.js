import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { renderInput } from '../../helpers';
import { signUp } from '../../actions';

class SignUpPage extends Component {

    handleSignUp(values) {
        this.props.signUp(values).then(() => {
            if (this.props.auth) {
                this.props.history.push(`/location-page`);
            }

        });
    }

    render(){
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
                    <form onSubmit={this.props.handleSubmit(this.handleSignUp.bind(this))}>
                        <h3 className='center-align' style={h3Style}>Sign Up</h3>

                        <div className='col s8 offset-s2'>
                            <Field component={ renderInput } id='email' name='email' />
                            <Field component={ renderInput } id='password' name='password' type='password' />
                            <Field component={ renderInput } id='confirmPassword' name='confirmPassword' type='password' />
                        </div>
                        <div className='col s12 center-align'>
                            <button className='btn amber darken-3' type='submit'>Sign Up</button>
                        </div>
                    </form>
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
    if (values.password !== values.confirmPassword) {
        error.confirmPassword = 'Passwords do not match'
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

SignUpPage = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUpPage);

export default connect(mapStateToProps, { signUp })(SignUpPage);