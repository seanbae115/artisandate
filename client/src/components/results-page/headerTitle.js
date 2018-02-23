import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <div className="col s4 offset-s2">
            <Link to = '/event-page' className = 'btn thin-btn'>Details</Link>
        </div>
    )
}