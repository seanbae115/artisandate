import React, { Component } from 'react';
import { connect } from 'react-redux';
import './eventPage.css'
import { getIndividual } from '../../actions';
import NavBar from '../nav-bar/navBar';
import Title from './title';
import JumboImg from './jumboImg';
import Info from './info';
import Environment from './environment';

class EventPage extends Component{
    componentDidMount(){
        console.log('props are: ', this.props)
        this.props.getIndividual();
    }
    render(){
        return (
            <div className = 'structure'>
                <NavBar/>
                <Title/>
                <JumboImg/>
                <Info/>
                <Environment/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        business: state.detail
    }
}

export default connect(mapStateToProps, { getIndividual })(EventPage);

