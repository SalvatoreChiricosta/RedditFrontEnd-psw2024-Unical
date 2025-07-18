import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfiloComponent } from '../profilo/profilo.component';
import { HomeComponent } from '../home/home.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

import { MocService } from '../service/moc.service';
import { generate } from 'rxjs';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterLink,
    RouterOutlet,
    ProfiloComponent,
    HomeComponent,
    SearchBarComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  profile: any;
  constructor(private mocservice:MocService){}
  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? '80px' : '250px'));
  ngOnInit(): void {
    this.profile = this.mocservice.generateProfile();
  }
}
