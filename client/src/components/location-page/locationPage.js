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
            <input {...props.input} placeholder = 'Zip Code' type = 'number'/>
        )
    }
    render(){
        console.log('location props:', this.props);
        return (
            <div>
                <NavBar/>
                <div className="location-page-container container amber">
                    <div className="row location-page-row">
                        <div className="text-align-center">
                            <form onSubmit = {this.props.handleSubmit(this.sendData.bind(this))}>
                                <div className="grey-text text-darken-3 date-location">Let us know your date location to get started.</div>
                                <div className="zip-code">Zip Code</div>
                                <div className="btn-large input-field transparent-input location-page-input">
                                        <Field label = 'zip' name = 'zip' component = {this.renderInput}/>    
                                </div>
                                <div className="margin-top-60"></div>
                                    <button className="btn-large blue go">Go</button>
                                <div className="margin-top-100"></div>
                            </form>
                        </div>
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
