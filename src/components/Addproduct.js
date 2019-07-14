import React from 'react';
const Addproduct = (props) => {
    return (
        <div className="form-group container mt-3">
<label> ID :</label>  <input id="id" onChange={props.takeinput} className="form-control" type="number" placeholder="Enter P.ID"/><br/>
<label>NAME:</label>   <input id="name" onChange={props.takeinput} className="form-control" type="text" placeholder="Enter P. NAME"/><br/>
<label> PRICE:</label>  <input id="price" onChange={props.takeinput} className="form-control" type="number" placeholder="P. PRICE"/><br/>
<label> URL: </label>  <input id="url" onChange={props.takeinput} className="form-control" type="url" placeholder="P. URL"/><br/>
    <button onClick={props.addprodclick} className="btn btn-primary" type="submit">ADD PRODUCT</button><br/>
        </div>
    );
}

export default Addproduct;