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
            'height': '91.54vh',
            'width': '100vw'
        };

        return (
            <div className="grey lighten-4 valign-wrapper" style={containerStyle}>
                <div className="row card-width">
                    <div className="col s10 offset-s1">
                        <div className="card white">
                            <div className="card-content">
                                <span className='card-title center-align'>Sign Up</span>
                                <form onSubmit={this.props.handleSubmit(this.handleSignUp.bind(this))}>
                                    <Field component={ renderInput } id='email' name='email' />
                                    <Field component={ renderInput } id='password' name='password' type='password' />
                                    <Field component={ renderInput } id='confirmPassword' name='confirm password' type='password' />
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

    if (!values.email) {
        error.email = 'Please enter an email'
    }
    if (!values.password) {
        error.password = 'Please choose a password'
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