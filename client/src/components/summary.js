import React from "react";
import NavBar from "./nav_bar";
import SummaryEvent from "./summary_event";
import SummaryButtons from "./summaryButtons";
import "../assets/css/summary.css";
import {MapComponent} from './map';


const Summary = props => {
    return(
        <div>
            <NavBar/>
            <SummaryEvent/>
            <SummaryEvent/>
            <SummaryEvent/>
            <MapComponent/>
            <SummaryButtons/>
           </div>
    );
};

export default Summary;