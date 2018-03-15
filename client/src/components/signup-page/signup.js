import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { renderInput } from '../../helpers';
import { signUp } from '../../actions';
import "../../helpers/helper.css"

class SignUpPage extends Component {

    handleSignUp(values) {
        this.props.signUp(values).then(() => {
            if (this.props.auth) {
                this.props.history.push(`/location-page`);
            }

        });
    }

    render(){
        const containerStyle = {
            'height': '92.5vh',
            'width': '100vw'
        };

        return (
            <div className="grey lighten-4 valign-wrapper" style={containerStyle}>
                <div className="row card-width">
                    <div className="col s10 offset-s1">
                        <div className="card white">
                            <div className="card-content">
                                <span className='card-title center-align signup-card-title'>Sign Up</span>
                                <form onSubmit={this.props.handleSubmit(this.handleSignUp.bind(this))}>
                                    <Field component={ renderInput } id='email' name='email' label='Email' />
                                    <Field component={ renderInput } id='password' name='password' type='password' label='Password' />
                                    <Field component={ renderInput } id='confirmPassword' name='confirmPassword' type='password' label='Confirm Password' />
                                    <div className="row">
                                        <div className='col s12 center-align'>
                                            <button className='btn cyan' type='submit'>Sign Up</button>
                                        </div>
                                    </div>
                                </form>
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
    const minPassword = /^.{6,}$/;
    if (!values.email) {
        error.email = 'Please enter an email';
    } else if (values.email !== undefined && !values.email.match(validEmail)) {
            error.email = "Please enter a valid email address";
    }
    if (!values.password) {
        error.password = 'Please create a password'
    } else if (!values.password.match(minPassword)) {
        error.password = 'Minimum length of 8 characters';
    }
    if (values.password !== values.confirmPassword) {
        error.confirmPassword = 'Passwords do not match';
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