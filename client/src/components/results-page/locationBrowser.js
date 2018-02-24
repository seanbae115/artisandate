import React, {Component} from 'react';
import"./resultsPage.css"
import {connect} from "react-redux";
import Header from './resultHeader';
import Body from './resultBody';
import MaterialIcon, { colorPallet } from 'material-icons-react';
import {locationDetails} from "../../actions";
import {Carousel} from "react-responsive-carousel";
import "./carousel.css"

class LocationBrowser extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentIndex: 0
        }
    }

    render() {
        const { locations, history } = this.props;

        console.log('location:', locations);

        if(!locations.length){
            return <p>Loading...</p>;
        }

        const result = locations.map((item, index) => {
            // console.log("Businesses:", item.id);
            const {image_url, name, location, display_phone, id} = item;
            return (
                <Body key={index} name={name} image={image_url} address={location} phone={display_phone} id={id}/>
            )
        });

        const { currentIndex } = this.state;

        return (
            <div className="location-info-group">
                <div className="row valign-wrapper">
                    <div className="col s1">
                        <MaterialIcon icon='chevron_left' size='small'/>
                    </div>
                    <div className="col s10 content-list">
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} onChange={(index) => {
                            console.log("the state of the Carousel", index);
                            this.setState({currentIndex: index});
                            locationDetails(locations[index].id)}}>
                            {result}
                        </Carousel>
                    </div>
                    <div className="col s1">
                        <MaterialIcon icon='chevron_right' size='small'/>
                    </div>
                </div>
                <Header history={history} locationId={locations[currentIndex].id}/>
                <div className="divider"/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        index: state.locationDetail.locationIndex,
        id: state.locationDetail.locationId
    }
}

export default connect(mapStateToProps, {locationDetails})(LocationBrowser);