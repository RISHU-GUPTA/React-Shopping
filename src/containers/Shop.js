import React, { Component } from 'react';
import Products from '../components/Products';
import {instance} from '../utils/axiosconfig';
import Addproduct from '../components/Addproduct';
import Searchbar from '../components/Searchbar';
import ButtonAdd from '../components/ButtonAdd';
class Shop extends Component {
    constructor(props) {
        super(props);
        this.items=[];
        this.inputs={};
        this.arr=[];
        this.flag=true;
        this.state = {items:this.items,inputs:this.inputs,flag:this.flag  };
    }


doAxiosAjax(){
var pr=instance.get('mobiles.json');
pr.then(data=>{
    console.log('data from axios ', data.data.mobiles);
    this.items=data.data.mobiles; //this is required to retain items after addind products
    this.setState({items:data.data.mobiles});
}).catch(err=>console.log('error is ',err));
}

componentWillMount(){
   this.doAxiosAjax();
}

takeinputs(event){
this.inputs[event.target.id]=event.target.value;
console.log(this.inputs);
}

addclick(){
    this.flag=!this.flag;
    this.setState({...this.state,flag:this.flag})
}

addprodclick(){
    this.items.push(this.inputs);
    this.inputs={}; //this is needed as it prints the latest add product two times
    this.flag=!this.flag;
    this.arr=this.items;
    this.setState({...this.state,items:this.items,inputs:this.inputs})
}

search(event){
var orgnarr=this.items;
if(event.target.value!==""){
   var arr= this.items.filter(ele=>{
       const name=ele.name.toLowerCase();
       return name.includes(event.target.value.toLowerCase());
       }
    );
}
else{
    arr=orgnarr;
    }
this.setState({...this.state,items:arr});
}

render() {
    var display;
    if(this.flag===true){
        display=<div>
        <Searchbar search={this.search.bind(this)}/>
        <ButtonAdd click={this.addclick.bind(this)}/>
        <Products prods={this.state.items} />
        </div>
        
    }
else{
    display=<Addproduct takeinput={this.takeinputs.bind(this)} addprodclick={this.addprodclick.bind(this)}/>
}
    return (
        <div>{ display }</div>
        );
    }
}

export default Shop;


































































































































// doAjax(){
//     var pr=fetch('https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json');
//     pr.then(response=>{
//         response.json().then(data=>{
//          //   console.log('data is ',data['mobiles']);
//            this.setState({items:data['mobiles']});

//         }).catch(err=>console.log('JSON error is ',err));

//     }).catch(err=>console.log(' Server error is ',err));

// }