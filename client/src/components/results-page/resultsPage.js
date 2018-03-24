import React, {Component} from 'react';
import {connect} from "react-redux";
import "./resultsPage.css"
import { getPlanner, locationDetails, reloadPlanner } from "../../actions";
import { Link } from 'react-router-dom';
import LocationBrowser from "./locationBrowser";


class ResultsPage extends Component {
    constructor(props){
        super(props);

        this.initialUpdate = {
            events: false,
            food: false,
            drinks: false,
            complete: false
        };
    }

    componentDidMount(){
        const sessionLoaded = sessionStorage.getItem("loadedResults");
        if (JSON.parse(sessionLoaded)) {
            console.log("calling the reload planner");
            const sessionEvents = sessionStorage.getItem("eventsResults");
            const sessionFood = sessionStorage.getItem("foodResults");
            const sessionDrinks = sessionStorage.getItem("drinksResults");

            const sessionDateResults = {
                data: {
                    reloadEvents: JSON.parse(sessionEvents),
                    reloadFood: JSON.parse(sessionFood),
                    reloadDrinks: JSON.parse(sessionDrinks)
                }
            };
            this.props.reloadPlanner(sessionDateResults)
        } else {
            this.props.getPlanner(this.props.match.params).then(() => {
                sessionStorage.setItem("eventsResults", JSON.stringify(this.props.events));
                sessionStorage.setItem("foodResults", JSON.stringify(this.props.food));
                sessionStorage.setItem("drinksResults", JSON.stringify(this.props.drinks));
                sessionStorage.setItem("loadedResults", JSON.stringify(this.props.dataLoaded));
                this.props.history.push(`/results-page/${props.zip}`);
            }).catch(() => {
                console.log("there was an error connecting to the server");
            });
        }
    }
  
    goToSummary(){
        // const finalPlan = {
        //     event: this.props.mainEvent,
        //     food: this.props.mainFood,
        //     drinks: this.props.mainDrinks
        // };
        this.props.history.push(`/summary-page`);
    }

    render() {
        const { history } = this.props;

        return (
            <div className="grey lighten-4">
                <div className="active-area">
                    <LocationBrowser initial={this.initialUpdate} name="Events" history={history} locations={this.props.events}/>
                    <LocationBrowser initial={this.initialUpdate} name="Food" history={history} locations={this.props.food}/>
                    <LocationBrowser initial={this.initialUpdate} name="Drinks" history={history} locations={this.props.drinks}/>
                    <div className="center-align">
                        <button onClick={this.goToSummary.bind(this)} className='btn cyan my-8'>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        events: state.dateResults.events,
        food: state.dateResults.food,
        drinks: state.dateResults.drinks,
        dataLoaded: state.dateResults.receivedData,
        mainEvent: state.datePlan.mainEvent,
        mainFood: state.datePlan.mainFood,
        mainDrinks: state.datePlan.mainDrinks
    }
}

export default connect(mapStateToProps, {getPlanner, reloadPlanner, locationDetails})(ResultsPage);