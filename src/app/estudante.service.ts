import { Estudante } from './estudante';
import { Injectable } from '@angular/core';
import { ESTUDANTES } from './mock-estudantes';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor() { }

  getEstudantes(): Estudante[] {
    return ESTUDANTES;
  }
}
