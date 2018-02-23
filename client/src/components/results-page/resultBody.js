import React from 'react';
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
                        <p>{phone}</p>
                    </div>
                </div>
            </div>
    )
}