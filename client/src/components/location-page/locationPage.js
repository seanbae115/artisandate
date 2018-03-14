import React, {Component} from 'react';
import './locationPage.css';
import '../../helpers/helper.css'
import { connect } from 'react-redux';
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
        return (
            <div className='grey lighten-4 valign-wrapper location-page-container'>
                <div className="row card-width">
                    <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
                        <div className="card white">
                            <div className="card-content">
                                <div className="grey-text text-darken-3 date-location center-align">Let us know your date location to get started.</div>
                                <form onSubmit = {this.props.handleSubmit(this.sendData.bind(this))}>
                                    <span className='card-title grey-text zipText center-align'>Zip Code</span>
                                    <div className='col s8 offset-s2'>
                                        <Field label = 'zip' name = 'zip' component = {this.renderInput}/>
                                    </div>
                                    <div className='row'>
                                        <div className= 'col s12 center-align'>
                                            <button className="btn-large cyan go">Go</button>
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

LocationPage = reduxForm({
    form: 'zip-form'
})(LocationPage);

export default connect(null, { sendZip })(LocationPage);
