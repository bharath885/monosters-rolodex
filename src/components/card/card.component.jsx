import React from 'react';
import './card.styles.css';

export const Card=(props)=>(
    <div className="card-container">
        <img alt="monoster" src={`https://robohash.org/${props.monoster.id}?set=set2`}></img>
        <h1>{props.monoster.name}</h1>
<p>{props.monoster.email}</p>
        </div>
)