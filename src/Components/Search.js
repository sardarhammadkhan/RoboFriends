import React from 'react'

function Search(props) {
   
    return (
        <div className='mt-3 mb-4 p-3'>
            <h1>Serach Robot</h1>
            <input type='search'
            onChange={props.change}
            ></input>
        </div>
    )
}

export default Search
