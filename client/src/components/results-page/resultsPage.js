import React, {Component} from 'react';
import {connect} from "react-redux";
import"./resultsPage.css"
import {getPlanner} from "../../actions";
import { Link } from 'react-router-dom';
import NavBar from "../nav-bar/navBar";
import EventBrowser from "./eventBrowser";


class ResultsPage extends Component {
    componentDidMount(){
        this.props.getPlanner(this.props.match.params.zip);
        console.log('ZIP:', this.props.match.params.zip);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <EventBrowser locations={this.props.event}/>
                <EventBrowser locations={this.props.dinner}/>
                <EventBrowser locations={this.props.drinks}/>
                <div className="center-align location-info-group">
                    <Link to='/summary-page' className='btn btn-large'>Confirm</Link>
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