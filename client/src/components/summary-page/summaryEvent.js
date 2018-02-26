import React from "react";

const SummaryEvent = props => {

    return (
            <div className="row">
                <div className="row event-title">
                    <div className="col s12">
                       {props.eventType}
                    </div>
                </div>
                <div className="col s10 event-contain valign-wrapper">
                    <div><span className="event-font">{props.eventName}</span></div>
    
                </div>
                <div className="col s2 event-contain valign-wrapper">
                    <a className="btn-floating waves-effect waves-light blue right"><i
                        className="material-icons">create</i></a>
                </div>
            </div>
        );
};


export default SummaryEvent;