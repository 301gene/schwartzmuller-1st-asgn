import React from 'react';

const userinput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.userName} />
        </div>
    )
};

export default userinput;
