import React from 'react';
const Searchbar = (props) => {
    return (
        <input onChange={props.search} type="text" placeholder="Type to Search"/>
    );
}

export default Searchbar;