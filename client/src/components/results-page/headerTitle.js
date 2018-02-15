import React from 'react';

export default props => {
    const { title } = props
    return (
        <div className="col s6">
            <h4>{title}</h4>
        </div>
    )
}