import "./modal.css"
import React, {Component} from "react";
import { Link } from "react-router-dom";

class Modal extends Component {


    render(){
        
        const displayModal = {
            display: this.props.display ? "flex" : "none",
            justifyContent: this.props.display ? "center" : "none"
        };
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
                                    <div className="col s6 center-align my-8">
                                        <Link to="/location-page" className="btn cyan">Yes</Link>
                                    </div>
                                    <div className="col s6 center-align">
                                        <button onClick={this.props.closeModal} className="btn red darken-2 my-8">No</button>
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

export default Modal;