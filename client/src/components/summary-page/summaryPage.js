import React, {Component} from "react";
import {connect} from "react-redux";
import SummaryEvent from "./summaryEvent";
import SummaryButtons from "./summaryButtons";
import "./summaryPage.css";
import {MapComponent} from './map';
import Modal from '../modal/Modal';
import {reloadFinalPlan} from "../../actions";


class Summary extends Component{
    constructor(props) {
        super(props);

        this.state = {
            displayModal: false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        // this.initialMapCenterLatitude = this.initialMapCenterLatitude.bind(this);
        // this.initialMapCenterLongitude =   this.initialMapCenterLongitude.bind(this);
        // this.determineMapZoom = this.determineMapZoom.bind(this);
    }

    componentWillMount(){
        const sessionLoaded = sessionStorage.getItem("loadedResults");
        console.log("First part component did mount: ", sessionLoaded);
        if (JSON.parse(sessionLoaded)) {
            console.log("calling the reload planner");
            const sessionFinalPlan = sessionStorage.getItem("finalPlan");

            const sessionDateResults = JSON.parse(sessionFinalPlan);
            console.log("SUMMARY FINAL: ", sessionDateResults);
            this.props.reloadFinalPlan(sessionDateResults)
        } //else {
        //     this.props.getPlanner(this.props.match.params).then(() => {
        //         sessionStorage.setItem("eventsResults", JSON.stringify(this.props.events));
        //         sessionStorage.setItem("foodResults", JSON.stringify(this.props.food));
        //         sessionStorage.setItem("drinksResults", JSON.stringify(this.props.drinks));
        //         sessionStorage.setItem("loadedResults", JSON.stringify(this.props.dataLoaded));
        //     }).catch(() => {
        //         console.log("there was an error connecting to the server");
        //     });
        // }
    }

    openModal(){
        this.setState ({
            displayModal: true,
        })
    }

    closeModal(){
        this.setState({
            displayModal: false,
        })
    }

    initialMapCenterLatitude(){
        console.log("Inkjhdsjkfhasdjkh", this.props.event.coordinates);
        if (!this.props.food.coordinates || !this.props.food.coordinates || !this.props.food.coordinates){
            return;
        }
        let foodLat = this.props.food.coordinates.latitude;
        let eventLat = this.props.event.coordinates.latitude;
        let drinksLat = this.props.drinks.coordinates.latitude;
        return ((eventLat + foodLat + drinksLat)/3);
    }
    initialMapCenterLongitude(){
        if (!this.props.food.coordinates || !this.props.food.coordinates || !this.props.food.coordinates){
            return;
        }
        let foodLong = this.props.food.coordinates.longitude;
        let eventLong = this.props.event.coordinates.longitude;
        let drinksLong = this.props.drinks.coordinates.longitude;
        return ((eventLong + foodLong + drinksLong)/3);
    }
    calculateDistance(lat, long, midpoint1, midpoint2){
        const p = 0.017453292519943295;    // Math.PI / 180
        const c = Math.cos;
        const a = 0.5 - c((midpoint1 - lat) * p) / 2 +
            c(lat * p) * c(midpoint1 * p) *
            (1 - c((midpoint2 - long) * p)) / 2;
        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km;
    }

    determineMapZoom() {
        if (!this.props.food.coordinates || !this.props.food.coordinates || !this.props.food.coordinates){
            return;
        }
        let zoom = null;
        let distance = null;
        let midpointOne = null;
        let midpointTwo = null;

        let foodLat = this.props.food.coordinates.latitude;
        let eventLat = this.props.event.coordinates.latitude;
        let drinksLat = this.props.drinks.coordinates.latitude;
        let foodLong = this.props.food.coordinates.longitude;
        let eventLong = this.props.event.coordinates.longitude;
        let drinksLong = this.props.drinks.coordinates.longitude;

        //formula to calculate the midpoint of all three points
        midpointOne = ((eventLat + foodLat + drinksLat) / 3);
        console.log(midpointOne);
        midpointTwo = ((eventLong + foodLong + drinksLong) / 3);
        console.log(midpointTwo);

        //calculates the distance (in km) between the midpoint and each of the three locations on the map and determines which is the greatest distance
        let foodDistance = this.calculateDistance(foodLat, foodLong, midpointOne, midpointTwo);
        console.log(foodDistance);
        let greatestDistance = foodDistance;

        let eventDistance = this.calculateDistance(eventLat, eventLong, midpointOne, midpointTwo);
        console.log(eventDistance);

        if(greatestDistance < eventDistance){
            greatestDistance = eventDistance;
        }
        let drinkDistance = this.calculateDistance(drinksLat, drinksLong, midpointOne, midpointTwo);
        console.log(drinkDistance);

        if(greatestDistance < drinkDistance){
            greatestDistance = drinkDistance;
        }
        console.log(greatestDistance);
        //calculates the value of the initial zoom on the map based on the greatest distance in (km).
        if(greatestDistance < 3){
            zoom = 13;
        }
        else if(greatestDistance >= 3 && greatestDistance <= 10){
            zoom = 10.85;
        }
        else if(greatestDistance > 10 && greatestDistance <= 20){
            zoom = 10.5;
        }
        else if(greatestDistance > 20 && greatestDistance <= 30){
            zoom = 9.25;
        }
        else if(greatestDistance > 30 && greatestDistance <=45){
            zoom = 9;
        }
        else{
            zoom = 8;
        }
        return zoom;
    }

    render() {
        console.log("summary Render props: ", this.props);
        const latitude = this.initialMapCenterLatitude();
        const longitude = this.initialMapCenterLongitude();
        const initialZoom = this.determineMapZoom();
        return (
                <div className="grey lighten-4">
                    <div className='row'>
                        <div className="col s12 m10 offset-m1 l6 offset-l3">
                                    <SummaryEvent eventType="Event" eventName={this.props.event.name}/>
                                    <SummaryEvent eventType="Food" eventName={this.props.food.name}/>
                                    <SummaryEvent eventType="Drinks" eventName={this.props.drinks.name}/>
                        </div>
                        <div className="col s12 m10 offset-m1 l6 offset-l3 nav-contain">
                            <MapComponent eventLoc={this.props.event}
                                          foodLoc={this.props.food}
                                          drinkLoc={this.props.drinks}
                                          initialLat={latitude}
                                          initialLong={longitude}
                                          mapZoom={initialZoom}
                            />

                        </div>

                    </div>
                        <SummaryButtons openModal={this.openModal}/>
                        <Modal display={this.state.displayModal} closeModal={this.closeModal} />
                </div>
        );
    }
}
function mapStateToProps(state){
    console.log("MSTP Summary: ", state.datePlan);
    return {
        event: state.datePlan.mainEvent,
        food: state.datePlan.mainFood,
        drinks: state.datePlan.mainDrinks
    }
}

export default connect(mapStateToProps, {reloadFinalPlan})(Summary);