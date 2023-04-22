export class Animal {
  #nome: string;
  #caracteristicas: string[];

  constructor(nome: string, caracteristicas: string[]){
    this.#nome = nome;
    this.#caracteristicas = caracteristicas;
  }

  exibirAnimal(): void {
    console.log(`Animal: ${this.#nome}`);
  }

  cadastrar(caracteristica: string): void{
    this.#caracteristicas.push(caracteristica);
  }

  exibirCaracteristica(): string{
    const random = Math.floor(Math.random() * this.#caracteristicas.length);
    return this.#caracteristicas[random];
  }
}