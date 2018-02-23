import React from 'react';

export default props => {
    return (
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
    )
}