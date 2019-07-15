import React from 'react';
const Product = (props) => {
    return (
        <div className="container">
        
        <li>
        Product Name : {props.prod.name} {" "}
        Product Price: {props.prod.price}{" "}
        <button onClick={props.counter} className="btn btn-info">Add To Cart</button><br/>
       <img alt="mobile" src= {props.prod.url}/>
        </li>
        </div>
    );
}

export default Product;