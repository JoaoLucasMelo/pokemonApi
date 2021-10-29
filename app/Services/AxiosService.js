


export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000
})


export const myApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/JohnMelo/pokemon/',
  timeout: 5000
})