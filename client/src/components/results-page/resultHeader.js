import React from 'react';
import "./resultsPage.css"
import Title from './headerTitle'
import Slider from './slider';

export default props => {
    const {title} = props;
    return (
        <div className="row valign-wrapper bottom-pad">
            <Title title={title}/>
            <Slider/>
        </div>
    )
}