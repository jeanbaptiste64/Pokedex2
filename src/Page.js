import React, {Component} from 'react';
import './Page.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Card from './Card';
import pokemon from './pokemon';


class Page extends Component{
  constructor(props)
  {
  super(props);
  }
  render(){
    return (
      
      JSON.parse(localStorage.getItem('Card')).map((index) => {
            return <div> <Card id={index.id} img={index.img} name={index.name} type={index.type}></Card><br /></div>
        }
 
    )

    )
    
    }
}

export default Page;


/*

    <body> 
      
<div class="ListPokemon">
<div class="card-group">
  <div class="card">
    <img src="http://www.serebii.net/pokemongo/pokemon/001.png" class="card-img-top" alt="http://www.serebii.net/pokemongo/pokemon/001.png"/>
    <div class="card-body">
      <h5 class="card-title">Card</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>

<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

</body>

*/