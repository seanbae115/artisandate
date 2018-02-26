import React, {Component} from 'react';
import MaterialIcon, { colorPallet } from 'material-icons-react';
import"./resultsPage.css"
import "./carousel.css"
import {connect} from "react-redux";
import Header from './resultHeader';
import Body from './resultBody';
import {locationDetails} from "../../actions";
import {Carousel} from "react-responsive-carousel";


class LocationBrowser extends Component {
    constructor(props){
        super(props);

        this.locationId = "";
        this.details = {};
        this.updateLocation = this.updateLocation.bind(this);
        this.goToDetails = this.goToDetails.bind(this);
    }

    componentWillReceiveProps(nextProps){

        if(!this.props.initial.complete){
            this.updateLocation(0, nextProps.locations);
            this.props.initial[nextProps.name] = true;

            if(this.props.initial.events && this.props.initial.food && this.props.initial.drinks){
                this.props.initial.complete = true;
            }
        }
    }

    updateLocation(index, locations){
        if(this.props.locations.length === 0){
            this.locationId = locations[index].id;
            this.props.locationDetails(locations[index], this.props.name);
            return;
        }

        this.locationId = this.props.locations[index].id;
        this.details = this.props.locations[index];
        this.props.locationDetails(this.details, this.props.name);
    }

    goToDetails(){
        this.props.history.push(`/event-page/${this.locationId}`);
    }


    render() {
        const { locations } = this.props;

        if(!locations.length){
            return (
                <div className="location-info-group">
                    <div className="row valign-wrapper">
                        <div className="col s12 content-list center-align">
                            Loading...
                        </div>
                    </div>
                    <div className="row valign-wrapper bottom-pad">
                        <div className="col s4 offset-s2">
                            <button className='btn thin-btn'>Details</button>
                        </div>
                        {/*toggle switch */}
                        <div className="col s5">
                            <div className="switch">
                                <label>
                                    Omit
                                    <input type="checkbox"/>
                                    <span className="lever"/>
                                    Include
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="divider"/>
                </div>
            );
        }

        const result = locations.map((item, index) => {
            const {image_url, name, location, display_phone, id} = item;
            return (
                <Body key={index} name={name} image={image_url} address={location} phone={display_phone} id={id}/>
            )
        });

        return (
            <div className="location-info-group">
                <div className="row valign-wrapper">
                    <div className="col s1">
                        <MaterialIcon icon='chevron_left' size='small'/>
                    </div>
                    <div className="col s10 content-list">
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} onChange={this.updateLocation}>
                            {result}
                        </Carousel>
                    </div>
                    <div className="col s1">
                        <MaterialIcon icon='chevron_right' size='small'/>
                    </div>
                </div>
                <div className="row valign-wrapper bottom-pad">
                    <div className="col s4 offset-s2">
                        <button onClick={this.goToDetails} className='btn thin-btn'>Details</button>
                    </div>
                    {/*toggle switch */}
                    <div className="col s5">
                        <div className="switch">
                            <label>
                                Omit
                                <input type="checkbox"/>
                                <span className="lever"/>
                                Include
                            </label>
                        </div>
                    </div>
                </div>
                <div className="divider"/>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     if (this.props === undefined){
//         return {};
//     }
//     switch (this.props.name){
//         case "events":
//             return {mainEvent: state.datePlan.mainEvent};
//         case "food":
//             return {mainFood: state.datePlan.mainFood};
//         case "drinks":
//             return {mainDrinks: state.datePlan.mainDrinks}
//     }
// }

export default connect(null, {locationDetails})(LocationBrowser);