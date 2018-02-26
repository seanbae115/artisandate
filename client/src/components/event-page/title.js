import React from 'react';
import './title.css';
import './jumboImg.css';

function TitleImage(props){

    if (!props.business) {
        return <h1>Loading...</h1>
    }
    console.log("this is buniness name: ", props.business.name);
    return (
        <div>
            <div id="title">
                <div className="row">
                    <div className="col s12">
                        <h1 className = 'center-align lobster'>{props.business.name}</h1>
                    </div>
                </div>
            </div>
            <div id="jumboImg">
                <div className="row">
                    <div className="col s12 center-align">
                        <img className='multi' src={props.business.photos[0]} alt={props.business.id} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TitleImage;