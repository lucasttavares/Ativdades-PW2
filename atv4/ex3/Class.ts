type ComidaDePet = 'insetos' | 'frutas' | 'plantas' | 'sementes' | 'vegetais';

abstract class PequenoRoedor {
  readonly especie: string;

  private _felicidade: number = 0;

  constructor(especie: string) {
    this.especie = especie;
  }

  public abstract comer(comida: ComidaDePet): boolean;

  public estaFeliz(): boolean {
    return this._felicidade > 0;
  }

  protected incrementarFelicidade(): void {
    this._felicidade++;
  }
}

export class Furao extends PequenoRoedor {
  constructor() {
    super('Furão');
  }

  public cavar(): void {
    this.incrementarFelicidade();
  }

  public comer(comida: ComidaDePet): boolean {
    return ['insetos', 'plantas', 'sementes', 'vegetais'].includes(comida);
  }
}

export class Hamster extends PequenoRoedor {
  constructor() {
    super('Hamster');
  }

  public correr(): void {
    this.incrementarFelicidade();
  }

  public comer(comida: ComidaDePet): boolean {
    return true;
  }
}