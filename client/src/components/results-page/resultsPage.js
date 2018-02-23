import React, {Component} from 'react';
import {connect} from "react-redux";
import"./resultsPage.css"
import {getPlanner} from "../../actions";
import { Link } from 'react-router-dom';
import NavBar from "../nav-bar/navBar";
import EventBrowser from "./eventBrowser";


class ResultsPage extends Component {
    sendId(id){
        this.props.history.push('/event-page');
    }
    componentDidMount(){
        this.props.getPlanner();
        this.props.getPlanner(this.props.match.params);
    }
    render() {
        return (
            <div>
                <NavBar/>
                <EventBrowser locations={this.props.event}/>
                <EventBrowser locations={this.props.dinner}/>
                <EventBrowser locations={this.props.drinks}/>
                <div className="center-align location-info-group">
                    <button onClick = {this.sendId.bind(this)} className='btn btn-large'>Confirm</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        event: state.datePlan.events,
        dinner: state.datePlan.food,
        drinks: state.datePlan.drinks

    }
}

export default connect(mapStateToProps, {getPlanner})(ResultsPage);