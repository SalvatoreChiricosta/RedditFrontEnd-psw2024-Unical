import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PostComponent } from '../post/post.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, PostComponent,MatSidenavModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
})
export class CommunityComponent {}
