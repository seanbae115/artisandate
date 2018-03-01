import React from "react";
import './summaryEvent.css';
import event from '../../assets/images/event_legend.png';
import food from '../../assets/images/food_legend.png';
import drinks from '../../assets/images/drinks_legend.png';


const SummaryEvent = props => {
    const icons = [event, food, drinks];

    const markerSelect = function(icon){
        switch(icon){
            case 'Event':
                return <div className = 'marker'><img src={icons[0]} alt=""/></div>
                break;
            case 'Food':
                return <div className='marker'><img src={icons[1]} alt="" /></div>
                break;
            case 'Drinks':
                return <div className='marker'><img src={icons[2]} alt="" /></div>
                break;
            default:
                return ''
                break;
        }
    };

    return (
            <div className="row">
                <div className="col s7 offset-s1 left-align event-title">
                    {props.eventType}
                </div>
                {markerSelect(props.eventType)}
                <div className="col s6 offset-s2 left-align">
                    <div className="event-font truncate">{props.eventName}</div>
                </div>
            </div>
        );
};


export default SummaryEvent;