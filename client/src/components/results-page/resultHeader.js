import React from 'react';
import { Route } from "react-router-dom";
import "./resultsPage.css";

export default props => {
    const { locationId, history, history: { location } } = props;

    function goToDetails(){
        console.log('History:', history);
        console.log('From Header Location ID:', locationId);

        history.push(location.pathname + '/' + locationId);
    }


    return (
        <div className="row valign-wrapper bottom-pad">
            <div className="col s4 offset-s2">
                {/*<button onClick={this.getDetails.bind(this)} className='btn thin-btn'>Details</button>*/}
                <button onClick={goToDetails} className='btn thin-btn'>Details</button>
            </div>
            {/*toggle switch */}
            <div className="col s5">
                <div className="switch">
                    <label>
                        Omit
                        <input type="checkbox"/>
                        <span className="lever"></span>
                        Include
                    </label>
                </div>
            </div>
        </div>
    )
}