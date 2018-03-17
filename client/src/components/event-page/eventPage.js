import React, { Component } from 'react';
import './title.css';
import { connect } from 'react-redux';
import { getIndividual } from '../../actions';
import TitleImage from './title';
import Info from './info';


class EventPage extends Component{
    componentDidMount(){
        this.props.getIndividual(this.props.match.params);
    }
    render(){
        if (!this.props.details){
            return(
                <div className='incoming'>
                    <h1>Details Incoming</h1>
                </div>
            );
        }
        return (
            <div className = 'structure container'>
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

