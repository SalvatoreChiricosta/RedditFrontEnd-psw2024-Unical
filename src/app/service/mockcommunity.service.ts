import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockcommunityService {

  constructor() { }
  generateCommunity(){
    let community= [
      {
        nome: 'primo',
        icona: ''
      },
      {
        nome: 'secondo',
        icona: ''
      }
    ]
    return community
  }
}
