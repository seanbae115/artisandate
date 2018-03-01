import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
        const containerStyle = {
            'height': '92.5vh',
            'width': '100vw'
        };
        return ( 
            <div className="grey lighten-4 valign-wrapper" style={containerStyle}>
                <div className="row">
                    <div className="col s10 offset-s1">
                        <div className="card white">
                            <div className="card-content">
                                <span className='card-title center-align'>Sign In</span>
                                <form onSubmit={this.props.handleSubmit(this.handleSignIn.bind(this))}>
                                    <Field name='email' component={renderInput}/>
                                    <Field name='password' type="password" component={renderInput} />
                                    <div className="row" style={{marginBottom: "5%"}}>
                                        <div className='center-align'>
                                            <button className='btn cyan'>Sign In</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="card-action">
                                    <div className="row">
                                        <div className='col-s12 center-align'>
                                            <div className='card-title'>Don't have an account?</div>
                                            <div className='row'>
                                                <div className='col-s12'>
                                                    <Link to='/signup-page' className='btn amber'>Create one</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
