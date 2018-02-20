import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    const { title } = props
    return (
        <div className="col s8">
            <Link to = '/event-page' className = 'btn'>Details</Link>
            <h4>{title}</h4>
        </div>
    )
}