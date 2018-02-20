import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
// import FaAnchor from 'react-icons/lib/fa/anchor';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import {MarkerWithLabel} from "react-google-maps/lib/components/addons/MarkerWithLabel";

const MyMapComponent = compose(
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
        })
    }),
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAl82-QVgSS43dlCQqr6flx8BaCbREVOTA&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 33.7743, lng: -117.9380 }}
    >


        <MarkerWithLabel
            // onClick={}
            position={{ lat:33.7743, lng: -117.9380 }}
            labelAnchor={new google.maps.Point(0,0)}
            labelStyle={{background: 'rgba(255,0,0, 0.6)', fontSize: "20px", padding: "8px",  }}
            >
            <div>
                <p>Pho 76
                    <br/>
                    Garden Grove,
                    <br/>
                    CA, 91740
                </p>
            </div>
        </MarkerWithLabel>

        <MarkerWithLabel
            // onClick={}
            position={{ lat:33.7846, lng: -117.8265 }}
            labelAnchor={new google.maps.Point(-20,3)}
            labelStyle={{background: 'rgba(255,255,0, 0.6)', fontSize: "20px", padding: "8px",  }}
        >
            <div>
                <p>The Block<br/>Orange, CA, 91740</p>
            </div>
        </MarkerWithLabel>

        <MarkerWithLabel
            // onClick={}
            position={{ lat:33.9184, lng: -117.7265 }}
            labelAnchor={new google.maps.Point(-20,3)}
            labelStyle={{background: 'rgba(0,0,255, 0.6)', fontSize: "20px", padding: "8px",  }}
        >
            <div>
                <p>The Shoppes<br/>Chino Hills</p>
            </div>
        </MarkerWithLabel>
    </GoogleMap>
);

export class MapComponent extends React.PureComponent {
    state = {
        isMarkerShown: false,
    };

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true });
        }, 3000)
    };

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false });
        this.delayedShowMarker();
    };

    render() {
        return (
            <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
            />
        );
    }
}
