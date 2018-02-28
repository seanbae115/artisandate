import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { sendMail } from "../../actions";
import { connect } from "react-redux";
import "./summaryPage.css"
import axios from 'axios';


class SummaryButtons extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.data = {
            email: this.props.email,
            dateData: this.props.dateData
        };
    };
    
    render(){
        return (
            <div className="row body-buffer">
                <div className="col s6 center-align">
                    <div onClick={()=>sendMail(this.data)} className="btn blue">Email</div>
                </div>
                {/* <div className="col s4 center">
                    <div to="/emailPage" className="btn blue">Add Calendar</div>
                </div> */}
                <div className="col s6 center-align">
                    <Link to="/" className="btn blue">Home</Link>
                </div>
            </div>
        )}
}

function mapStateToProps(state){
    // console.log("Summary Buttons", state);
    return {
        email: state.user.email,
        dateData: state.datePlan
    }
}
export default connect(mapStateToProps, {sendMail})(SummaryButtons);


//calendarPage button must route to "calendar page to make a google calendar? How to do this?"
// Email button must link to email page, how to do this?  need to create the page
// 2.  Home Button links to Matt's page with zip code I think...
// 3.  Routes must be on App.js as well as Router
//App contains the Routes must add them to app.js
//Need to change NavLink destination once we figure out what all the pages are called
