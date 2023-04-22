import { Animal } from './Class';

const animal= new Animal("Calango", ['Diurno', 'Onívoro']);

animal.cadastrar("Semi-arbóreo");
animal.exibirAnimal();
console.log(animal.exibirCaracteristica());