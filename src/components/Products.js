import React from 'react';
import Product from './Product';
const Products = (props) => {
    return (
       <ul>
       {props.prods.map((singleProduct,index)=><Product key={index} prod={singleProduct}/>)}
       </ul> 
    );
}

export default Products;