import React, {Component} from 'react';
import {connect} from "react-redux";
import {getEvent} from "../../actions";
import { Link } from 'react-router-dom';
import Header from './resultHeader';
import Body from './resultBody';
import NavBar from "../nav-bar/navBar";
import resultArray from './resultContents';


class ResultsPage extends Component {
    componentDidMount(){
        this.props.getEvent();
        console.log("DID MOUNT", this.props.getEvent())
    }

    render() {
        // console.log("in render", this.props.dinner);
        const result = resultArray.map((item, index) => {
            const {title, image, name, address} = resultArray[index];
            return (
                <div key={index}>
                    <Header title={title}/>
                    <Body name={name} image={image} address={address}/>
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
    console.log("Map to props date event", state.dateEvent.dinner);
    return {
        dinner: state.dateEvent
    }
}

export default connect(mapStateToProps, {getEvent})(ResultsPage);