import React from 'react';

const ActiveDot = (props) => {

        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="64" height="64">
                    <circle r="4" cx="32" cy="32" style={{'fill':`${props.fillColor}`}} />
                </svg>
            </div>
        );
};


export default ActiveDot
