import React from 'react';
import"./resultsPage.css"
import Header from './resultHeader';
import Body from './resultBody';
import MaterialIcon, { colorPallet } from 'material-icons-react';
import {Carousel} from "react-responsive-carousel";
import "./carousel.css"

 const EventBrowser = props => {
    const result = props.locations.map((item, index) => {
        const {image_url, name, location, display_phone} = item;
        return (
            <Body key={index} name={name} image={image_url} address={location} phone={display_phone}/>
        )
    });

    return (
        <div className="location-info-group">
            <div className="row valign-wrapper">
                <div className="col s1">
                    <MaterialIcon icon='chevron_left' size='small'/>
                </div>
                <div className="col s10 content-list">
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
                        {result}
                    </Carousel>
                </div>
                <div className="col s1">
                    <MaterialIcon icon='chevron_right' size='small'/>
                </div>
            </div>
            <Header/>
            <div className="divider"></div>
        </div>
    )
};



export default EventBrowser;