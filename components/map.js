import React, {Component} from 'react';

class GoogleMap extends Component{

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: 37.778519,                          //this.props.lat,
                lng: -117.836904,                         //this.props.lon,
            }
        });
    }


    render(){
        //this.ref.maps
        return <div ref="map" />
    }
}

export default GoogleMap;