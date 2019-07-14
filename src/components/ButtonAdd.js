import React from 'react';
const ButtonAdd = (props) => {
    return (
        <button className="btn btn-warning" onClick={props.click}>ADD PRODUCTS</button>
    );
}

export default ButtonAdd;