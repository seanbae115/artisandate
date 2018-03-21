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

    initialMapCenterLatitude(){
        let foodLat = this.props.food.coordinates.latitude;
        let eventLat = this.props.event.coordinates.latitude;
        let drinksLat = this.props.drinks.coordinates.latitude;
        console.log(((eventLat + foodLat + drinksLat)/3));
        return ((eventLat + foodLat + drinksLat)/3);
    }
    initialMapCenterLongitude(){
        let foodLong = this.props.food.coordinates.longitude;
        let eventLong = this.props.event.coordinates.longitude;
        let drinksLong = this.props.drinks.coordinates.longitude;
        return ((eventLong + foodLong + drinksLong)/3);
    }

    render() {
        return (
                <div className="grey lighten-4">
                    <div className='row'>
                        <div className="col s12 m10 offset-m1 l6 offset-l3">
                                    <SummaryEvent eventType="Event" eventName={this.props.event.name}/>
                                    <SummaryEvent eventType="Food" eventName={this.props.food.name}/>
                                    <SummaryEvent eventType="Drinks" eventName={this.props.drinks.name}/>
                        </div>
                        <div className="col s12 m10 offset-m1 l6 offset-l3 nav-contain">
                            <MapComponent eventLoc={this.props.event} foodLoc={this.props.food} drinkLoc={this.props.drinks} initialLat={this.initialMapCenterLatitude()} initialLong={this.initialMapCenterLongitude()} />

                        </div>

                    </div>
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