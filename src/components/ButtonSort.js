import React from 'react';
const ButtonSort = (props) => {
    return (
        <button className="btn btn-danger" onClick={props.sort}>Sort By Name</button>
    );
}

export default ButtonSort;