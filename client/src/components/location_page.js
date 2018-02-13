import React, {Component} from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/location_page.css';
import {NavLink} from "react-router-dom";

export default class LocationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: '',
        }
        // this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
        // this.handleGoButtonPressed = this.handleGoButtonPressed.bind(this);
    }

    handleZipCodeChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value,
        });
    }
    //
    // handleGoButtonPressed(event){
    //     event.preventDefault();
    //     this.setState = {
    //         zip: '',
    //     }
    //
    // }

    render(){
        const {zip} = this.state;
        return (
            <div className="location-page-container container amber">
                <div className="row location-page-row">
                    <div className="text-align-center">
                        <div className="grey-text text-darken-3 date-location">Let us know your date location to get started.</div>
                        <div className="zip-code">Zip Code</div>
                        <div className="btn-large input-field transparent-input location-page-input">
                            <input placeholder="zip code" id="zip-code" type="text" className="validate" name="zip" value={zip} onChange={this.handleZipCodeChange} />
                        </div>
                        <div className="margin-top-60"></div>
                        <div className="button">
                            {/*div will become a <NavLink to="/result">*/}
                            <div  className="btn-large blue go">Go</div> /* onClick={this.handleGoButtonPressed} might add this not sure */
                        </div>
                        <div className="margin-top-100"></div>
                        <div className="button">
                            {/*div will be a <NavLink to="/advanced"*/}
                            <div className="btn-large green advanced-options">Advanced Options</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}