import React, { Component } from 'react';
import './eventPage.css'
import NavBar from '../nav-bar/navBar';
import Title from './title';
import JumboImg from './jumboImg';
import Info from './info';
import Environment from './environment';

class EventPage extends Component{
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

export default EventPage;

