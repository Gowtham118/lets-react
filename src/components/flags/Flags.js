import './Flags.css'
import React from 'react';

function Flags(props) {
    return (
        <div className="flag">
            <div className="flag-icon">
                <img src={props.imageUrl}/>
            </div>
        </div>
    );
}

export default Flags;