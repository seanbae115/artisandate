import React, {Component} from 'react';
import {connect} from "react-redux";
import"./resultsPage.css"
import {getPlanner} from "../../actions";
import { Link } from 'react-router-dom';
import Header from './resultHeader';
import Body from './resultBody';
import NavBar from "../nav-bar/navBar";
import MaterialIcon, { colorPallet } from 'material-icons-react';


class ResultsPage extends Component {
    componentDidMount(){
        this.props.getPlanner();
    }

    render() {
        const result = this.props.dinner.map((item, index) => {
            const {image_url, name, location, display_phone} = item;
            return (

                    <Body key={index} name={name} image={image_url} address={location} phone={display_phone}/>

            )
        });

        return (
            <div>
                <NavBar/>
                <div className="location-info-group">
                    <div className="row valign-wrapper">
                        <div className="col s1">
                             <MaterialIcon icon='chevron_left' size='small'/>
                        </div>
                        <div className="col s10">
                            {result}
                        </div>
                        <div className="col s1">
                            <MaterialIcon icon='chevron_right' size='small'/>
                        </div>
                    </div>
                    <Header/>
                    <div className="divider"></div>
                </div>
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