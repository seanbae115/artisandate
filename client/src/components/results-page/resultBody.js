import React from 'react';
<<<<<<< HEAD
import {Carousel} from "react-responsive-carousel"
import "./resultsPage.css"

export default props => {

    const {name, image, address, phone} = props;
    const locationImage = {
        backgroundImage: `url("${image}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "19vh",
        width: "100%"
    };

    return (
                <div className="row">
                    <div className="col s6">
                        <div style={locationImage} className="z-depth-2"></div>
                    </div>
                    <div className="col s6">
                        <div className="row">
                            <h5 className="truncate">{name}</h5>
                            <p>{address.address1}</p>
                            <p>{`${address.city}, ${address.state} ${address.zip_code}`}</p>
=======
import MaterialIcon, { colorPallet } from 'material-icons-react';

export default props => {
    const {name, image, address, phone} = props;
    return (
        <div className="row valign-wrapper">
            <div className="col s1">
                <MaterialIcon icon='chevron_left' size='small' />
            </div>
            <div className="col s10">
                <div className="row">
                    <div className="col s6">
                        <img className='event' src={image}/>
                    </div>
                    <div className="col s6">
                        <div className="row">
                            <h5>{name}</h5>
                            <p>{address.display_address[0]}</p>
                            <p>{address.display_address[1]}</p>
>>>>>>> c3b7c8f580104b654011c058ac328dc4026601e1
                            <p>{phone}</p>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD

=======
            </div>
            <div className="col s1">
                <MaterialIcon icon='chevron_right' size='small'/>
            </div>
        </div>
>>>>>>> c3b7c8f580104b654011c058ac328dc4026601e1
    )
}