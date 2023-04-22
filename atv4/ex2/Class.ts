interface FilhoteInterface {
  readonly cores: string[];
  readonly pelagem: number;
  readonly tutor: string | undefined;
}

export class Filhote implements FilhoteInterface {
  readonly cores: string[];
  readonly pelagem: number;
  readonly tutor: string | undefined;

  constructor(cores: string[], pelagem: number, tutor: string | undefined = undefined) {
    this.cores = cores;
    this.pelagem = pelagem;
    this.tutor = tutor;
  }

  adotar(tutor: string): Filhote {
    return new Filhote(this.cores, this.pelagem, tutor);
  }
}
