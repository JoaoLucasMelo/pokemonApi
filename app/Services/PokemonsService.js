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
  console.log(res.data.results)
 }
async setPokemonActive(name){
  const res = await pokeApi.get('/pokemon/' + name)
// console.log(res.data); 

ProxyState.activePokemon = new Pokemon(res.data)
// console.log(ProxyState.activePokemon)
 }
 async addPokemon(){
 const found = ProxyState.myPokemons.find(p => p.name == ProxyState.activePokemon.name)
 if (found) {
   throw new Error('You already have that Pokemon!')
 }
 const res = await myApi.post('', ProxyState.activePokemon)
 const poke = new Pokemon(res.data)
 ProxyState.myPokemons = [...ProxyState.myPokemons, poke]
 console.log(res.data)
 this.setPokemonActive(poke.name)
 }


}








export const pokemonsService = new PokemonsService()