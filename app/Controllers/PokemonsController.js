import { ProxyState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";

function _drawPokemonsApi(){
  const poke = ProxyState.pokemon
  let template = ''
  poke.forEach(p=> template += `<p class="selectable" onclick="app.pokemonsController.setPokemonActive('${p.name}')">${p.name}</p>`)
  document.getElementById('pokemonsList').innerHTML = template
}
function _drawActivePokemon(){
let template = ''
if (ProxyState.activePokemon){
  template = ProxyState.activePokemon.Template
  document.getElementById('pokecenter').innerHTML = template
}
}
function _drawMyPokemons(){
  const poke = ProxyState.myPokemons
  let template = ''
  poke.forEach(p=> {template += `<p class="selectable" onclick="app.pokemonsController.setPokemonActive('${p.id}')">${p.name}</p>`})
  if (!template) {
    template = '<p class="text-grey darken-20"> You have no pokemon</p>'
  }
  document.getElementById('myPokemonsList').innerHTML = template
}



export class PokemonsController {
constructor(){
  ProxyState.on('pokemon',_drawPokemonsApi)
  ProxyState.on('activePokemon',_drawActivePokemon)
  ProxyState.on('myPokemons',_drawMyPokemons)
  this.getAllPokemons()
  this.getMyPokemons()
}
async getAllPokemons(){
  try {
    await pokemonsService.getAllPokemons()
  } catch (error) {
    console.error("[POKE API Error]", error)
  }
}
async getMyPokemons(){
  try {
    await pokemonsService.getMyPokemons()
  } catch (error) {
    console.error("[POKE API Error]", error)
  }
}

async addPokemon(name){
 
  try {
    await pokemonsService.addPokemon(name)
  } catch (error) {
    console.error("[POKE API Error]", error)
  }
}

 async setPokemonActive(id){
  await pokemonsService.setPokemonActive(id)
}






}