import React from 'react';
import './Person.css';
const person =(props)=>{

    return(
        <div className="Person">
        <p onClick={props.click}>I am  {props.name} and I am {props.age} years old</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        <p>{props.children}</p>
        </div>
    );
}
export default person;