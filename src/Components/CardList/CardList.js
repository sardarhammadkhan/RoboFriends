import React from 'react'
import Card from "../Card/Card";

function CardList ({robots}){

    const robs= robots.map((item,i)=>{
        return (
          <Card id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email} />
        );
    })
    return (
      <div>
        {robs}
      </div>
    );
}

export default CardList
