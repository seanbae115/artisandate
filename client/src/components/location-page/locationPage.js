import React, {Component} from 'react';
import '../../helpers/inputCardHelper.css'
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { sendZip } from '../../actions';

class LocationPage extends Component {
    sendData(props){
        this.props.history.push(`/results-page/${props.zip}`);
    }
    renderInput({ input, meta: {touched, error} }){
        const invalidInput = touched && error;
        return (
            <div className="input-field center-align">
                <input {...input}  type = 'number' className={`inputText center-align ${invalidInput ? "input-validation" : ""}`} placeholder='Zip Code'/>
                {touched ? <span className="error-msg">{error}</span> : <span/>}
            </div>
        )
    }

    render(){
        return (
            <div className='grey lighten-4 valign-wrapper input-card-container'>
                <div className="row card-width">
                    <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
                        <div className="card white ">
                            <div className="card-content">
                                <div className="grey-text text-darken-3 center-align card-subtitle">
                                    Let us know your date location to get started.
                                </div>
                                <form onSubmit={this.props.handleSubmit(this.sendData.bind(this))} className="center-align">
                                    <Field label='zip' name='zip' component={this.renderInput}/>
                                    <button className="btn-large bottom-btn cyan">Go</button>
                                    <button onClilck={this.getdata.locationCurrent} className="btn-large bottom-btn cyan">Current Location</button>
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
    const error ={};
    const validZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

    if (!values.zip){
        error.zip = 'Please enter a zip code';
    } else if (!values.zip.match(validZip)){
        error.zip = 'Please enter a valid zip code';
    }
    return error;
}
LocationPage = reduxForm({
    form: 'zip-form',
    validate: validate
})(LocationPage);

export default connect(null, { sendZip })(LocationPage);
