


export class Pokemon {

constructor(data){
  this.id = data.id || ''
  this.name = data.name
  this.abilities = data.abilities
  this.types = data.types
  this.height = data.height
  this.weight = data.weight
  this.imgUrl = data.sprites.other.dream_world.front_default
}

get Template(){
return`
<div>${this.name}</div>
`



}










  
}