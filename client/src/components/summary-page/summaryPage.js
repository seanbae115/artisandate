import React, {Component} from "react";
import {connect} from "react-redux";
import SummaryEvent from "./summaryEvent";
import SummaryButtons from "./summaryButtons";
import "./summaryPage.css";
import {MapComponent} from './map';


class Summary extends Component{
    render() {
        return (
            <div className='row'>
                <div className="col s12">
                    <SummaryEvent eventType="Event" eventName={this.props.event.name}/>
                    <SummaryEvent eventType="Food" eventName={this.props.food.name}/>
                    <SummaryEvent eventType="Drinks" eventName={this.props.drinks.name}/>
                </div>
                <div className="col s12">
                    <MapComponent eventLoc={this.props.event} foodLoc={this.props.food} drinkLoc={this.props.drinks} />
                    <SummaryButtons/>
                </div>
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