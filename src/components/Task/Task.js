import React from 'react';
import './Task.css';

const task = (props) => {
    return (
        <li id={props.id}>
            {props.text}
            <button onClick={props.click}>Remove</button> 
        </li>
    );
}

export default task;