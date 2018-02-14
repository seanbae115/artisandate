import React from "react";
import NavBar from "./nav_bar";
import SummaryEvent from "./summary_event";
import SummaryButtons from "./summaryButtons"
import "../assets/css/summary.css"

const Summary = props => {
    return(
        <div>
            <NavBar/>
            <SummaryEvent/>
            <SummaryEvent/>
            <SummaryEvent/>
            <SummaryButtons/>
           </div>
    );
};

export default Summary;