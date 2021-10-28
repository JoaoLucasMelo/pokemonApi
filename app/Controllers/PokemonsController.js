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
  poke.forEach(p=> template += `<p class="selectable" onclick="app.pokemonsController.setPokemonActive('${p.name}')">${p.name}</p>`)
  document.getElementById('myPokemonsList').innerHTML = template
}



export class PokemonsController {
constructor(){
  ProxyState.on('pokemon',_drawPokemonsApi)
  ProxyState.on('activePokemon',_drawActivePokemon)
  ProxyState.on('myPokemons',_drawMyPokemons)
  this.getAllPokemons()
// this.getAllPokemonsPages()
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

async addPokemon(){
  try {
    pokemonsService.addPokemon()
  } catch (error) {
    console.error("[POKE API Error]", error)
  }
}

 async setPokemonActive(name){
  await pokemonsService.setPokemonActive(name)
}






}