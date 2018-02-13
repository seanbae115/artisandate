import React from 'react';
import Header from './resultHeader';
import Body from './resultBody';
import resultArray from './resultContents';

export default props => {
    const result = resultArray.map((item, index)=> {
        const { title, image, name, address } = resultArray[index]
        return (
            <div key={index}>
                <Header title={title}/>
                <Body name={name} image={image} address={address}/>
                <hr className='grey darken-4'/>
            </div>
        )
    })
    return (
        <div>
            {result}
        </div>
    )
}