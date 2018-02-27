import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
// import FaAnchor from 'react-icons/lib/fa/anchor';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
import DrinkMarker from "../../assets/images/drink_marker.png";
import FoodMarker from "../../assets/images/food_marker.png";
import EventMarker from "../../assets/images/event_marker.png";

export class MapComponent extends React.PureComponent {
    state = {
        isMarkerShown: false,
    };
    
    MyMapComponent(){
        console.log("maps props", this.props)
        return compose(
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
                defaultCenter={{ lat: this.props.eventLoc.latitude, lng: this.props.eventLoc.longitude }}
            >
                <MarkerWithLabel
                    // onClick={}
                    position={{ lat: this.props.eventLoc.latitude, lng: this.props.eventLoc.longitude }}
                    icon={EventMarker}
                    labelAnchor={new google.maps.Point(0, 0)}
                    labelStyle={{ background: 'rgba(255,0,0, 0.6)', fontSize: "20px", padding: "8px", }}
                >
                    <div>
                        <p>Event
                        <br />
                            Costa Mesa,
                        {/*<br />*/}
                            {/*CA, 91740*/}
                        </p>
                    </div>
                </MarkerWithLabel>

                <MarkerWithLabel
                    // onClick={}
                    position={{ lat: this.props.foodLoc.latitude, lng: this.props.foodLoc.longitude }}
                    icon={FoodMarker}
                    labelAnchor={new google.maps.Point(-20, 3)}
                    labelStyle={{ background: 'rgba(255,255,0, 0.6)', fontSize: "20px", padding: "8px", }}
                >
                    <div>
                        <p>Food<br />Orange, CA, 91740</p>
                    </div>
                </MarkerWithLabel>

                <MarkerWithLabel
                    // onClick={}
                    position={{ lat: this.props.drinkLoc.latitude, lng: this.props.drinkLoc.longitude }}
                    icon={DrinkMarker}
                    labelAnchor={new google.maps.Point(-20, 3)}
                    labelStyle={{ background: 'rgba(0,0,255, 0.6)', fontSize: "20px", padding: "8px", }}
                >
                    <div>
                        <p>The Shoppes<br />Chino Hills</p>
                    </div>
                </MarkerWithLabel>
            </GoogleMap>
        );
    }

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
        const MyMapComponent = this.MyMapComponent()
        return (
            <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
            />
        );
    }
}
