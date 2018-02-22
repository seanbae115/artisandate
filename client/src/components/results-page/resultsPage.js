import React, {Component} from 'react';
import {connect} from "react-redux";
<<<<<<< HEAD
import"./resultsPage.css"
import {getPlanner} from "../../actions";
import { Link } from 'react-router-dom';
import NavBar from "../nav-bar/navBar";
import EventBrowser from "./eventBrowser";
=======
import {getPlanner} from "../../actions";
import { Link } from 'react-router-dom';
import Header from './resultHeader';
import Body from './resultBody';
import NavBar from "../nav-bar/navBar";
import resultArray from './resultContents';
>>>>>>> c3b7c8f580104b654011c058ac328dc4026601e1


class ResultsPage extends Component {
    componentDidMount(){
<<<<<<< HEAD
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
=======
        this.props.getPlanner();
    }

    render() {
        const result = this.props.dinner.map((item, index) => {
            const {title, image_url, name, location, display_phone} = item;
            return (
                <div key={index}>
                    <Header title={title}/>
                    <Body name={name} image={image_url} address={location} phone={display_phone}/>
                    <hr className='grey darken-4'/>
                </div>
            )
        });

        return (
            <div>
                <NavBar/>
                {result}
                <Link to='/summary-page' className='btn'>Confirm</Link>
>>>>>>> c3b7c8f580104b654011c058ac328dc4026601e1
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