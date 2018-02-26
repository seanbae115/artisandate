import React, { Component } from 'react';
import { connect } from 'react-redux';
import './eventPage.css'
import { getIndividual } from '../../actions';
import NavBar from '../nav-bar/navBar';
import TitleImage from './title';
import JumboImg from './jumboImg';
import Info from './info';
import Environment from './environment';


class EventPage extends Component{
    componentDidMount(){
        this.props.getIndividual(this.props.match.params);
    }
    render(){
        console.log("props in event page: ",this.props);
        return (
            <div className = 'structure'>
                <NavBar/>
                <TitleImage business = {this.props.details}/>
                <Info business={this.props.details}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        details: state.detail.data
    }
}

export default connect(mapStateToProps, { getIndividual })(EventPage);

