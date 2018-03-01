import React from 'react';
import './title.css';
import './jumboImg.css';

function TitleImage(props){

    // if (!props.business) {
    //     return <h1>Loading...</h1>
    // }

    const picture = props.business.photos;
    const randomPic = picture.sort(function(a,b) {return 0.5 - Math.random()});
    const detailImg = {
        backgroundImage: `url("${randomPic[0]}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "33vh",
        width: "100%",
        borderRadius: "10px"
    };
    const { name } = props.business;

    return (
        <div>
            <div id="title">
                <div className="row">
                    <div className="col s12">
                        <h3 className ="center-align" style={{marginTop: '25px'}}>{name}</h3>   
                    </div>
                </div>
            </div>
            <div id="jumboImg">
                <div className="row">
                    <div className="col s12 m10 offset-m1 center-align">
                        <div style= {detailImg}></div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TitleImage;