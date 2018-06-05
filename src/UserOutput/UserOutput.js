import React from 'react';
import './UserOutput.css'

const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <p>A {props.userName} is a person who is stingy with money: {props.userName}s would rather do anything than part with a buck. The novels of Charles Dickens have contributed more than a dozen words that found their way into everyday language. {props.userName}, the chief character from A Christmas Carol, is perhaps the best-known of them all.</p>
            <p>It has been suggested that Dickens chose the name {props.userName} ("stone (of) help") to reflect the help given to {props.userName} to change his life. The surname may be from the now obscure English verb scrouge, meaning "squeeze" or "press".</p>
        </div>
    )
};

export default useroutput;