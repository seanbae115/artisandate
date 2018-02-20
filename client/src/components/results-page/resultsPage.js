import React, {Component} from 'react';
import {connect} from "react-redux";
import {getPlanner} from "../../actions";
import { Link } from 'react-router-dom';
import Header from './resultHeader';
import Body from './resultBody';
import NavBar from "../nav-bar/navBar";
import resultArray from './resultContents';


class ResultsPage extends Component {
    componentDidMount(){
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