import React from 'react';
import { Link } from 'react-router-dom';
import Header from './resultHeader';
import Body from './resultBody';
import NavBar from "../nav-bar/navBar";
import resultArray from './resultContents';

const ResultsPage = props => {
    const result = resultArray.map((item, index)=> {
        const { title, image, name, address } = resultArray[index];
        return (
            <div key={index}>
                <Header title={title}/>
                <Body name={name} image={image} address={address}/>
                <hr className='grey darken-4'/>
            </div>
        )
    });
    return (
        <div>
            <NavBar/>
            {result}
            <Link to = '/summary-page' className='btn'>Confirm</Link>
        </div>
    )
};

export default ResultsPage;