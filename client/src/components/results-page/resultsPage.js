import React, {Component} from 'react';
import {connect} from "react-redux";
import"./resultsPage.css"
import {getPlanner} from "../../actions";
import { Link } from 'react-router-dom';
import Header from './resultHeader';
import Body from './resultBody';
import NavBar from "../nav-bar/navBar";


class ResultsPage extends Component {
    componentDidMount(){
        this.props.getPlanner();
    }

    render() {
        const result = this.props.dinner.map((item, index) => {
            const {image_url, name, location, display_phone} = item;
            return (
                <div className="location-info-group" key={index}>
                    <Body name={name} image={image_url} address={location} phone={display_phone}/>
                    <Header/>
                    <div className="divider"></div>
                </div>
            )
        });

        return (
            <div>
                <NavBar/>
                {result}
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