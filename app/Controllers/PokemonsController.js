import { ProxyState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";

function _drawPokemonsApi(){
  const poke = ProxyState.pokemon
  let template = ''
  poke.forEach(p=> template += `<p class="selectable" onclick="app.pokemonsController.setPokemonActive('${p.name}')">${p.name}</p>`)
  document.getElementById('pokemonsList').innerHTML = template

}
function _drawActivePokemon(){
  const poke = ProxyState.pokemon
  let template = ''
  poke.forEach(p=> template += `<p class="selectable" onclick="app.pokemonsController.setPokemonActive('${p.name}')">${p.name}</p>`)
  document.getElementById('pokecenter').innerHTML = template

}




export class PokemonsController {
constructor(){
  ProxyState.on('pokemon',_drawPokemonsApi)
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

// async getAllPokemonsPages(){
//   try {
//     await pokemonsService.getAllPokemonsPages()
//   } catch (error) {
//     console.error("[POKE API Error]", error)
//   }
// }

 async setPokemonActive(name){
  await pokemonsService.setPokemonActive(name)
  console.log(name);
}






}