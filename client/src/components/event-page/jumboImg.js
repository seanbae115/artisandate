import React from 'react';
import lola from '../../assets/images/lola.jpg';
import './jumboImg.css';




function JumboImg(props){
    

    if(!props.business){
        return <h1>Loading...</h1>
    }
    
    return (
    <div id="jumboImg">
        <div className="row">
            <div className="col s12 center-align">
                <img  className = 'multi' src={props.business.photos[2]} alt={props.business.id}/>
            </div>
        </div>
    </div>
    );
}

export default JumboImg;