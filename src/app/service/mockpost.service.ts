import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MocPostService {
  constructor() {}

  getAllPosts() {
    const post = [
      {
        username: 'grande uomo',
        community: 'primo',
        corpo: 'grande scoperta alessia è stupida',
        vote: 0,
        avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        foto: ''
      },

      {
        username: 'grande omone',
        community: 'primo',
        corpo: 'grande scoperta alessia è stupida',
        vote: 0,
        avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        foto: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
      },
      {
        username: 'omone',
        community: 'primo',
        corpo: 'grande scoperta alessia è stupida',
        vote: 0,
        avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        foto: 'https://material.angular.io/assets/img/examples/shiba1.jpg'

      },
      {
        username: 'omone',
        community: 'primo',
        corpo: 'grande scoperta alessia è stupida',
        vote: 0,
        avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        foto: 'https://material.angular.io/assets/img/examples/shiba1.jpg'

      },
    ];
    return post;
  }
}
