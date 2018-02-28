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
                <div className="location-page-container">
                    <div className="row location-page-row">
                        <div className="text-align-center">
                            <div className="grey-text text-darken-3 date-location">Let us know your date location to get started.</div>
                            <div className="card grey lighten-1">
                                <div className="card-content">
                                    <form onSubmit = {this.props.handleSubmit(this.sendData.bind(this))}>
                                        <h3 className='card-heading'>Zip Code</h3>
                                        <Field label = 'zip' name = 'zip' component = {this.renderInput}/>
                                    </form>
                                    <div className= 'goButtonContainer'>
                                        <button className="btn-large blue go">Go</button>
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

LocationPage = reduxForm({
    form: 'zip-form'
})(LocationPage);

export default connect(null, { sendZip })(LocationPage);
