import { pokeApi } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/PokemonModel.js";






class PokemonsService {
constructor(){
  console.log('working services');
}
async getAllPokemons(){
 const res = await pokeApi.get('/pokemon')
 ProxyState.pokemon = res.data.results
 console.log(res.data.results)
}
// async getAllPokemonsPages(){
//   const res = await pokeApi.get('/pokemon/?offset=20&limit=20')
//   ProxyState.pages = res.data.results
//   console.log(res.data.results)
//  }
async setPokemonActive(name){
  const res = await pokeApi.get('/pokemon/' + name)
console.log(res.data); 

ProxyState.activePokemon = new Pokemon(res.data)
console.log(ProxyState.activePokemon)
 }




}








export const pokemonsService = new PokemonsService()