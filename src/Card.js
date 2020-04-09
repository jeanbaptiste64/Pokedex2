import React,{Component} from 'react';
import './Page.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;



class Card extends Component{

    constructor(props)
    {git 
    super(props);
    this.state = {name: props.name, img: props.img, type : props.type}
    }

render()
{

    return (
<div class="card">
    <img src={this.state.img} class="card-img-top" alt="http://www.serebii.net/pokemongo/pokemon/001.png"/>
    <div class="card-body">
      <h5 class="card-title">Card : {this.state.name}</h5>
      <p class="card-text"> Type : {this.state.type} </p>
    </div>
  </div>

    )
}



} export default Card ; 