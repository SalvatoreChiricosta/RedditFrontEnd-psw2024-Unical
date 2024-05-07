import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfiloComponent } from '../profilo/profilo.component';
import { HomeComponent } from '../home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatSidenavModule, 
            MatButtonModule, 
            MatToolbarModule, 
            MatIconModule, 
            RouterLink, 
            RouterOutlet, 
            ProfiloComponent, 
            HomeComponent, 
            MatFormFieldModule, 
            MatSelectModule, 
            MatInputModule],    
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  showFiller = false;
}
