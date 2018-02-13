import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import lola from '../assets/images/lola.jpg';
import '../assets/css/jumboImg.css';




function JumboImg(){
    return (
    <div id="jumboImg">
        <div className="container">
            <div className="row">
                <div className="col s12 center-align">
                    <img  className = 'multi' src={lola} alt="Lola Gaspar"/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default JumboImg;