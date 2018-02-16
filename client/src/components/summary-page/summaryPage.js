import React from "react";
import NavBar from "../nav-bar/navBar";
import SummaryEvent from "./summaryEvent";
import SummaryButtons from "./summaryButtons";
import "./summaryPage.css";
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