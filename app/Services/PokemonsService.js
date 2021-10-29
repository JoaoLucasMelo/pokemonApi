import { pokeApi,myApi } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/PokemonModel.js";

class PokemonsService {
constructor(){
  console.log('working services');
}
async getAllPokemons(){
 const res = await pokeApi.get('/pokemon/?offset=0&limit=649')
 ProxyState.pokemon = res.data.results
//  console.log(res.data.results)
}
async getMyPokemons(){
  const res = await myApi.get('')
  console.log(res.data)
  const poke = res.data.map( p => new Pokemon(p))
  console.log(poke);
  ProxyState.myPokemons = poke
  
 }
async setPokemonActive(id){
  const res = await pokeApi.get('/pokemon/' + id)
console.log(res.data); 

ProxyState.activePokemon = new Pokemon(res.data)
// console.log(ProxyState.activePokemon)
 }
 async addPokemon(name){
 const found = ProxyState.myPokemons.find(p => p.name == ProxyState.activePokemon.name)
 if (found) {
   throw new Error('You already have that Pokemon!')
 }
let pokem = ProxyState.activePokemon
 const res = await myApi.post('', pokem)
 console.log(res.data)
//  IMPORTANT DONT NEED THIS  \/
//  const pokem = new Pokemon(res.data)
 ProxyState.myPokemons = [...ProxyState.myPokemons, pokem]
 console.log(ProxyState.myPokemons);

 }
 async setMyPokemonActive(id){
  const res = await myApi.get('/pokemon/' + id)
console.log(res.data); 

ProxyState.activePokemon = new Pokemon(res.data)
// console.log(ProxyState.activePokemon)
 }

}








export const pokemonsService = new PokemonsService()