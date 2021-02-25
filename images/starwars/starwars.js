import { films } from '../films.js'


console.log(films[6])

let filmOne = document.querySelector('#film1')
let filmTwo = document.querySelector('#film2')

filmOne.textContent = films[2].title
filmTwo.textContent = films[1].title