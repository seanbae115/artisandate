import React, {Component} from "react";
import { Link } from "react-router-dom";

class SummaryModal extends Component {


    render(){
        
        const displayModal = {
            display: this.props.display ? "flex" : "none",
            justifyContent: this.props.display ? "center" : "none"
        }
        console.log('props in modal: ', this.props);
        return (
            <div style={displayModal} className="homeModal valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <div className="card grey lighten-3">
                            <div className="card-content center-align">
                                <p className="modal-font">Are You Sure You Want To Start Over?</p>
                            </div>
                            <div className="card-action">
                                <div className="row">
                                    <div className="col s6 center-align">
                                        <Link to="/location-page" className="btn cyan">Yes</Link>
                                    </div>
                                    <div className="col s6 center-align">
                                        <button onClick={this.props.closeModal} className="btn red darken-2">No</button>
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

export default SummaryModal;