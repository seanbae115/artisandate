import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class SummaryButtons extends Component {
    render(){

        return (
            <div className="row">
                <div className="col s4 center">/>
                    <NavLink to="/calendarPage" className="btn btn-large waves-effect waves-light blue btn-confirm">Email</NavLink>
                </div>
                <div className="col s4 center">
                    <NavLink to="/emailPage" className="btn btn-large waves-effect waves-light blue btn-confirm">Add Calendar</NavLink>
                </div>
                <div className="col s4 center">
                    <NavLink to="/home" className="btn btn-large waves-effect waves-light blue btn-confirm">Home</NavLink>
                </div>
            </div>
        )}
}

export default SummaryButtons;


//calendarPage button must route to "calendar page to make a google calendar? How to do this?"
// Email button must link to email page, how to do this?  need to create the page
// 2.  Home Button links to Matt's page with zip code I think...
// 3.  Routes must be on App.js as well as Router
//App contains the Routes must add them to app.js
//Need to change NavLink destination once we figure out what all the pages are called
