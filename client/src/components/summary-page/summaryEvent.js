import React from "react";

const SummaryEvent = props => {

    return (
            <div>
                <div className="col s11 offset-s1 left-align event-title">
                    {props.eventType}
                </div>
                <div className="col s10 offset-s2 left-align">
                    <div className="event-font truncate">{props.eventName}</div>
                </div>
            </div>
        );
};


export default SummaryEvent;