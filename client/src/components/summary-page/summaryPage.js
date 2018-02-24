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
            <SummaryEvent eventType="Event" eventName="name1"/>
            <SummaryEvent eventType="Food" eventName="name2"/>
            <SummaryEvent eventType="Drink" eventName="name3"/>
            <MapComponent/>
            <SummaryButtons/>
           </div>
    );
};

export default Summary;