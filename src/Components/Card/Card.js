import React from 'react'
import { robots } from "../robots";
function Card(props) {
    return (
      <div className='bg-light-green dib br3 pa1 ma1 grow tc'>
        <img src={`https://robohash.org/${props.id}?200x200/`}/>
        <div>
    <h1>{props.name}</h1>
    <p>{props.username}</p>
    <p>{props.email}</p>
        </div>
      </div>
    );
}

export default Card

