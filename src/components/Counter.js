import React from 'react';
const Counter = (props) => {
    return (
        <a className="btn btn-success btn-sm ml-3" href="">
                    <i className="fa fa-shopping-cart"></i> Cart
                    <span className="badge badge-light">{props.count}</span>
                </a>
    );
}

export default Counter;