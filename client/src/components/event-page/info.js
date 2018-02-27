import React, { Component } from 'react';
import './info.css';
import fourstar from '../../assets/images/4-star.png';
import fourhalfstar from '../../assets/images/4-2-star.png';
import fivestar from '../../assets/images/5-star.png';

class Info extends Component{
    stars(rating){
        switch(rating){
            case 4:
                return <img className = 'responseive-img' src = {fourstar} alt = 'Stars'/>;
                break;
            case 4.5:
                return <img className='responseive-img' src={fourhalfstar} alt='Stars' />;
                break;
            case 5:
                return <img className='responseive-img' src={fivestar} alt='Stars' />;
                break;
            default:
                return <h4>stars</h4>;
                break;
        }
    }
    render(){

        if (!this.props.business) {
            return <p>Loading</p>;
        }

        const { rating, price } = this.props.business;

        return (
            <div>
                <div id="rating">
                    <div>
                        <div className="row valign-wrapper">
                            <div className="col s6">
                                <span>{this.stars(rating)}</span>
                            </div>
                            <div className="col s6 center-align">
                                <span className = 'dollarSign amber-text'>{price}</span>
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
}

export default Info;