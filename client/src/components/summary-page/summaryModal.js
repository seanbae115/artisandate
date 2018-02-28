import React, {Component} from "react";
import { Link } from "react-router-dom";

class SummaryModal extends Component {


    render(){
        const displayModal = {
            display: this.props.display ? "block" : "none"
        }

        return (
            <div style={displayModal} className="homeModal">
                <div className="modalContent">
                    <div className="row">
                        <h3 className="modalConfirmation col s8 offset-s2 center-align">Are You Sure You Want To Continue?</h3>
                    </div>
                    <div className="row center-align bodybuffer">
                        <Link to="/location-page" className="btn red">Yes</Link>
                        <div onClick={this.props.closeModal} className="btn blue">No</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SummaryModal;