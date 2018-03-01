import React, {Component} from "react";
import { Link } from "react-router-dom";

class SummaryModal extends Component {


    render(){
        const displayModal = {
            display: this.props.display ? "flex" : "none"
        }

        return (
            <div style={displayModal} className="homeModal valign-wrapper">
                <div className="row">
                    <div className="col s10 offset-s1 center-align">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text center-align">
                                <p>Are You Sure You Want To Continue?</p>
                            </div>
                            <div className="card-action">
                                <div className="row center-align">
                                    <Link to="/location-page" className="btn red">Yes</Link>
                                    <div onClick={this.props.closeModal} className="btn blue">No</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SummaryModal;