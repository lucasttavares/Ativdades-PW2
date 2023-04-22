import { Filhote } from './Class';

const filhote = new Filhote(["preto", "branco"], 3);
console.log(filhote); // Filhote { cores: [ 'preto', 'branco' ], pelagem: 3, tutor: undefined }

const filhoteAdotado = filhote.adotar("Lucas");
console.log(filhoteAdotado); // Filhote { cores: [ 'preto', 'branco' ], pelagem: 3, tutor: 'João' }
