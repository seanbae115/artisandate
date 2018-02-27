import React from "react";

const SummaryEvent = props => {

    return (
            <div className="row">
                <div className="row event-title">
                    <div className="col s12">
                       {props.eventType}
                    </div>
                </div>
                <div className="col s12 event-contain valign-wrapper">
                    <div className="event-font truncate">{props.eventName}</div>
                </div>
            </div>
        );
};


export default SummaryEvent;