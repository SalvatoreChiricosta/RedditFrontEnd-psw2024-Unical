import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MocService {

  constructor() { }

  generateProfile() {
    const profiles = [
      { username: 'Grande Uomo',
        nome: 'Mario',
        cognome: 'Rossi',
        descrizione: 'Appassionato di sport.',
      },
     /* {
        username: 'Grande Cazzone',
        nome: 'Luigi',
        cognome: 'Verdi',
        descrizione: 'Amante della cucina e dei viaggi.',
      },
      {
        username: 'Grande Troiona',
        nome: 'Giulia',
        cognome: 'Bianchi',
        descrizione: 'Artista poliedrica con una passione per la scrittura.',
      }, */
      // Aggiungi altri profili se necessario
    ];

    // Genera un indice casuale per ottenere un profilo casuale
    

    return profiles[0];
  }
}
