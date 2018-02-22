import React from 'react';
<<<<<<< HEAD
import "./resultsPage.css"
=======
>>>>>>> c3b7c8f580104b654011c058ac328dc4026601e1
import Title from './headerTitle'
import Slider from './slider';

export default props => {
    const {title} = props;
    return (
<<<<<<< HEAD
        <div className="row valign-wrapper bottom-pad">
=======
        <div className="row valign-wrapper">
>>>>>>> c3b7c8f580104b654011c058ac328dc4026601e1
            <Title title={title}/>
            <Slider/>
        </div>
    )
}