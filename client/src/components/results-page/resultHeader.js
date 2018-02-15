import React from 'react';
import Title from './headerTitle'
import Slider from './slider';

export default props => {
    const {title} = props;
    return (
        <div className="row valign-wrapper">
            <Title title={title}/>
            <Slider/>
        </div>
    )
}