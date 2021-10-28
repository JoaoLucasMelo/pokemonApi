


export class Pokemon {

constructor(data){
  this.id = data.id || ''
  this.name = data.name
  this.abilities1 = data.abilities[0].ability.name 
  this.abilities2 = data.abilities[1]?.ability.name || ''
  this.types1 = data.types[0].type.name 
  this.types2 = data.types[1]?.type.name || ''
  this.height = data.height
  this.weight = data.weight
  this.imgUrl = data.sprites.other.dream_world.front_default
}

get Template(){
return`
<div  class="marginstats  borders card bg-light">
<div class=" card-body d-flex justify-content-evenly flex-row h-100">
<div>
  <h1 class="marginstats card-title text-center">${this.name.toUpperCase()}</h1>
  <div>
  <h3><b>Pokédex number:</b> ${this.id} </h3>
  <h3><b>Abilities:</b> ${this.abilities1} ${this.abilities2? ', ' : ' '}${this.abilities2}  </h3>
  <h3><b>Type:</b> ${this.types1} ${this.types2? ', ' : ' '}${this.types2} </h3>
  <h3><b>Weight:</b> ${this.weight} lbs </h3>
  <h3><b>Height:</b> ${this.height} ft </h3>
  <button class="btn btn-success mt-5" onclick="app.pokemonsController.addPokemon()">Add</button>
  </div>
</div>
<div class="">
  <img width="500px" height="500px"
    src="${this.imgUrl}"
    alt="">
</div>
</div>
</div>
`
}










  
}