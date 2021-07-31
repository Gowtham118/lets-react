import './Flags.css'
import React from 'react';

function Flags(props) {
    return (
        <div className="flag">
            <div className="flag-icon">
                <img src={imageUrl}/>
            </div>
            <div className="flag-name">
                {}
            </div>
        </div>
    );
}

export default Flags;