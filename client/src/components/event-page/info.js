import React from 'react';
import './info.css';
import yelp from '../../assets/images/Yelp-Stars.png';

function Info(props){
    return (
        <div>
            <div id="rating">
                <div>
                    <div className="row">
                        <div className="col s6">
                            <img className = 'responsive-img'src={yelp} alt="Stars"/>
                        </div>
                        <div className="col s6 center-align">
                            <i className="small material-icons">attach_money</i>
                            <i className="small material-icons">attach_money</i>
                            <i className="small material-icons">attach_money</i>
                        </div>
                    </div>
                </div>
            </div>
            <div id="description">
                <div>
                    <div className="row">
                        <div className="col s12">
                            <p className = 'flow-text justify roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, porro!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;