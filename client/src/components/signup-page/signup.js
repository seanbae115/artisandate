import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { renderInput } from '../../helpers';
import NavBar from '../nav-bar/navBar';

class SignUpPage extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    signup(){
        const serverRoute = "http://localhost:8000/signup";
        const request = axios.post()
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
                                <Field id='email-signup' name='email' value='name' type="email" component={renderInput}/>
                                <label>Password</label>
                                <Field id='password-signup' name='password' value='password' type='password' component={renderInput}/>
                                <label>Confirm Password</label>
                                <Field id='conf-password' name='conf-password' value='conf-password' type='password' component={renderInput} />
                                <div className='center-align'>
                                    <Link to='/login-page 'id='register' className='btn amber darken-3' type='button'>Sign Up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SignUpPage = reduxForm({
    form: 'signup-form'
})(SignUpPage);

export default connect(null, {})(SignUpPage);
