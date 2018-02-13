import React, { Component } from 'react';
import '../assets/css/eventPage.css'
import Nav from './nav';
import Title from './title';
import JumboImg from './jumboImg';
import Info from './info';
import Environment from './environment';

class EventPage extends Component{
    render(){
        return (
            <div className = 'structure'>
                <Nav/>
                <Title/>
                <JumboImg/>
                <Info/>
                <Environment/>
            </div>
        );
    }
}

export default EventPage;

