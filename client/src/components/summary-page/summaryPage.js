import React, {Component} from "react";
import {connect} from "react-redux";
import NavBar from "../nav-bar/navBar";
import SummaryEvent from "./summaryEvent";
import SummaryButtons from "./summaryButtons";
import "./summaryPage.css";
import {MapComponent} from './map';


class Summary extends Component{
    render() {
        console.log("Summary Page Props: ", this.props);
        console.log('Latitude: ', this.props.event.coordinates.latitude);
        return (
            <div>
                <NavBar/>
                <SummaryEvent eventType="Event" eventName={this.props.event.name}/>
                <SummaryEvent eventType="Food" eventName={this.props.food.name}/>
                <SummaryEvent eventType="Drinks" eventName={this.props.drinks.name}/>
                <MapComponent eventLoc={this.props.event.coordinates} foodLoc={this.props.food.coordinates} drinkLoc={this.props.drinks.coordinates} />
                <SummaryButtons/>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        event: state.datePlan.mainEvent,
        food: state.datePlan.mainFood,
        drinks: state.datePlan.mainDrinks
    }
}

export default connect(mapStateToProps)(Summary);