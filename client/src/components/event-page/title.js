import React from 'react';
import './title.css';
import './jumboImg.css';

function TitleImage(props){

    if (!props.business) {
        return <h1>Loading...</h1>
    }
    
    const picture = props.business.photos;
    const randomPic = picture.sort(function(a,b) {return 0.5 - Math.random()});

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
                        <img className='multi' src={randomPic[0]} alt={props.business.id} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TitleImage;