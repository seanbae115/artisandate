import React, {Component} from "react";
import {connect} from "react-redux";
import SummaryEvent from "./summaryEvent";
import SummaryButtons from "./summaryButtons";
import "./summaryPage.css";
import {MapComponent} from './map';
import SummaryModal from './summaryModal';


class Summary extends Component{
    constructor(props) {
        super(props);

        this.state = {
            displayModal: false,
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    render() {
        console.log("Summary Page Props: ", this.props);
        // console.log('Latitude: ', this.props.event.coordinates.latitude);
        return (
            <div>
                <SummaryEvent eventType="Event" eventName={this.props.event.name}/>
                <SummaryEvent eventType="Food" eventName={this.props.food.name}/>
                <SummaryEvent eventType="Drinks" eventName={this.props.drinks.name}/>
                <MapComponent eventLoc={this.props.event} foodLoc={this.props.food} drinkLoc={this.props.drinks} />
                <SummaryButtons openModal={this.openModal}/>
                <SummaryModal display={this.state.displayModal} closeModal={this.closeModal} />
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