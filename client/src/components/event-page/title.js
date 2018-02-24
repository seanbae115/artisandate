import React from 'react';
import './title.css';

function Title(props){

    if (!props.business) {
        return <h1>Loading...</h1>
    }
    console.log("this is buniness name: ", props.business.name);
    return (
        <div id="title">
            <div className="row">
                <div className="col s12">
                    <h1 className = 'center-align lobster'>{props.business.name}</h1>
                 </div>
            </div>
        </div>
    );
}

export default Title;