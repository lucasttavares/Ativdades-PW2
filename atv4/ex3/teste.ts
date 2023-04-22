import { Furao, Hamster } from './Class'

const furao = new Furao();
console.log(furao.especie);
console.log(furao.estaFeliz());
console.log(furao.comer('insetos'));
console.log(furao.comer('frutas'));
furao.cavar();
console.log(furao.estaFeliz());

const hamster = new Hamster();
console.log(hamster.especie);
console.log(hamster.estaFeliz());
console.log(hamster.comer('insetos'));
console.log(hamster.comer('frutas'));
hamster.correr();
console.log(hamster.estaFeliz());
