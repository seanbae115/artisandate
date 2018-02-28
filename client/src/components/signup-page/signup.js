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
        return (
            <div>
                <div className="container amber">
                    <div className="card blue lighten-1">
                        <div className="card-content">
                            <form onSubmit={this.props.handleSubmit(this.handleSignUp.bind(this))}>
                                <h3 className='card-heading'>Sign Up</h3>
                                <Field component={ renderInput } id='email' name='email' />
                                <Field component={ renderInput } id='password' name='password' type='password' />
                                <Field component={ renderInput } id='confirmPassword' name='confirmPassword' type='password' />
                                <div className='center-align'>
                                    <button className='btn amber darken-3' type='submit'>Sign Up</button>
                                </div>
                            </form>
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