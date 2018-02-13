import React from 'react';

export default props => {
    return (
        <div className="col s6 right-align">
            <div className="switch">
                <label>
                    Off
                    <input type="checkbox"/>
                        <span className="lever"></span>
                        Save
                </label>
            </div>
        </div>
    )
}