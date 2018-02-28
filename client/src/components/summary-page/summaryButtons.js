import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { sendMail, loadSpinner } from "../../actions";
import { connect } from "react-redux";
import "./summaryPage.css"
import axios from 'axios';


class SummaryButtons extends Component {
    constructor(props){
        super(props);
        this.data = {
            email: this.props.email,
            dateData: this.props.dateData,
            sendState: 'idle'
        };

        this.sendItinerary = this.sendItinerary.bind(this)
    }
    
    sendItinerary(){

        console.log("User data: ", this.props);
        if (!this.props.sent){
            this.props.loadSpinner();
            this.props.sendMail(this.data);
        }
    }


    render(){
        const {status} = this.props;
        let emailButton;
        switch(status){
            case 'sending':
                emailButton = <div className="btn blue" style={{paddingTop: "0.6rem"}}><div className="loading"/></div>;
                break;
            case 'sent':
                emailButton = <div className="btn grey">SENT</div>;
                break;
            default:
                emailButton = <div onClick={this.sendItinerary} className="btn blue">EMAIL</div>;
        }
         return (
            <div className="row body-buffer">
                <div className="col s4 center">
                    {/*Will change these to Link later but they don't exist yet and it blows up without Router being in place*/}
                    {emailButton}
                </div>
                <div className="col s4 center">
                    {/*Will change these to Link later but they don't exist yet and it blows up without Router being in place*/}
                    <div to="/emailPage" className="btn blue">Add Calendar</div>
                </div>
                <div className="col s4 center">
                    {/*Will change these to Link later but they don't exist yet and it blows up without Router being in place*/}
                    <Link to="/" className="btn blue">Home</Link>
                </div>
            </div>
        )}
}

function mapStateToProps(state){
    console.log("This is the button state: ", state.mail);
    return {
        email: state.user.email,
        dateData: state.datePlan,
        sent: state.mail.emailSent,
        status: state.mail.status
    }
}
export default connect(mapStateToProps, {sendMail, loadSpinner})(SummaryButtons);


//calendarPage button must route to "calendar page to make a google calendar? How to do this?"
// Email button must link to email page, how to do this?  need to create the page
// 2.  Home Button links to Matt's page with zip code I think...
// 3.  Routes must be on App.js as well as Router
//App contains the Routes must add them to app.js
//Need to change NavLink destination once we figure out what all the pages are called
