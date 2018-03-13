import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIndividual } from '../../actions';
import TitleImage from './title';
import Info from './info';


class EventPage extends Component{
    componentDidMount(){
        this.props.getIndividual(this.props.match.params);
    }
    render(){
        console.log("props in event page: ",this.props);
        if (!this.props.details){
            return <h1>loading...</h1>
        }
        return (
            <div className = 'structure'>
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

