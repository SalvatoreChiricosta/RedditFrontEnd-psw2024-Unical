import { Component } from '@angular/core';
import { MocPostService } from '../service/mockpost.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIcon],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  posts: any[] = []; // Inizializza un array vuoto per i post

  constructor(private postservice: MocPostService) {}

  ngOnInit(): void {
    // Popola l'array dei post utilizzando il servizio
    this.posts = this.postservice.getAllPosts();
  }

  voto(post: any) {
    post.vote++; // Incrementa il conteggio dei voti del post cliccato
  }
  
  notvoto(post: any) {
    post.vote--; // Incrementa il conteggio dei voti del post cliccato
  }
  
}
