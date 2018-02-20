import React from 'react';
import MaterialIcon, { colorPallet } from 'material-icons-react';

export default props => {
    const {name, image, address, phone} = props;
    return (
        <div className="row valign-wrapper">
            <div className="col s1">
                <MaterialIcon icon='chevron_left' size='small' />
            </div>
            <div className="col s10">
                <div className="row">
                    <div className="col s6">
                        <img className='event' src={image}/>
                    </div>
                    <div className="col s6">
                        <div className="row">
                            <h5>{name}</h5>
                            <p>{address.display_address[0]}</p>
                            <p>{address.display_address[1]}</p>
                            <p>{phone}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s1">
                <MaterialIcon icon='chevron_right' size='small'/>
            </div>
        </div>
    )
}