import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
<<<<<<< HEAD
    return (
        <div className="col s4 offset-s2">
            <Link to = '/event-page' className = 'btn thin-btn'>Details</Link>
=======
    const { title } = props
    return (
        <div className="col s8">
            <Link to = '/event-page' className = 'btn'>Details</Link>
            <h4>{title}</h4>
>>>>>>> c3b7c8f580104b654011c058ac328dc4026601e1
        </div>
    )
}