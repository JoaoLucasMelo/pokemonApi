


export class Pokemon {

constructor(data){
  this.id = data.id || ''
  this.name = data.name 
  this.nickName = data.nickName || ''
  this.abilities = data.abilities || ''
  this.types = data.types || ''
  this.height = data.height 
  this.weight = data.weight 
  this.user = data.user || ''
  this.img = data.sprites.other.dream_world.front_default 
}

get Template(){
return`
<div  class="marginstats  borders card bg-light">
<div class=" card-body d-flex justify-content-evenly flex-row h-100">
<div>
  <h1 class="marginstats card-title text-center">${this.name.toUpperCase()}</h1>
  <div>
  <h3><b>Pokédex number:</b> ${this.id} </h3>
  <h3><b>Abilities:</b> ${this.Abilities} </h3>
  <h3><b>Type:</b> ${this.Types} </h3>
  <h3><b>Weight:</b> ${this.weight} lbs </h3>
  <h3><b>Height:</b> ${this.height} ft </h3>
  <button class="btn btn-success mt-5" onclick="app.pokemonsController.addPokemon('${this.name}')">Add</button>
  </div>
</div>
<div class="">
  <img width="500px" height="500px"
    src="${this.img}"
    alt="">
</div>
</div>
</div>
`
}

get Abilities(){
  let template1 = ''
  this.abilities.forEach(a => { template1 +=  `${a.ability.name} `})
  return template1
  
  }
get Types(){
let template2 = ''
this.types.forEach(t =>{ template2 +=  `${t.type.name} `})
return template2

}










  
}