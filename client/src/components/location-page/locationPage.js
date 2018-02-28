import React, {Component} from 'react';
import './locationPage.css';
import NavBar from "../nav-bar/navBar";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { reduxForm, Field } from 'redux-form';
import { sendZip } from '../../actions';

class LocationPage extends Component {
    sendData(props){
        this.props.history.push(`/results-page/${props.zip}`);
    }
    renderInput(props){
        return (
            <input {...props.input}  type = 'number' className='inputText center-align'/>
        )
    }
    render(){
        console.log('location props:', this.props);
        return (
            <div className='grey lighten-4 location-page-container'>
                <div className="valign-wrapper">
                    <div className="row">
                        <div className="grey-text text-darken-3 date-location center-align">Let us know your date location to get started.</div>
                        <form onSubmit = {this.props.handleSubmit(this.sendData.bind(this))}>
                            <h3 className='card-heading zipText center-align'>Zip Code</h3>
                            <div className='col s8 offset-s2'>
                                <Field label = 'zip' name = 'zip' component = {this.renderInput}/>
                            </div>
                            <div className='row'>
                                <div className= 'col s12 center-align'>
                                    <button className="btn-large blue go">Go</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

LocationPage = reduxForm({
    form: 'zip-form'
})(LocationPage);

export default connect(null, { sendZip })(LocationPage);
