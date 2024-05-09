import { Component } from '@angular/core';
import { MocService } from '../service/moc.service';
import { MatCardModule } from '@angular/material/card'
@Component({
  selector: 'app-profilo',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.css'
})
export class ProfiloComponent {
  profile: any;

  constructor(private mocservice: MocService) {}

  ngOnInit(): void {
    this.profile = this.mocservice.generateProfile();
  }

}
