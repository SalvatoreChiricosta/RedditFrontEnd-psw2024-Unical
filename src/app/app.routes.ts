import { Routes } from '@angular/router';
import { ProfiloComponent } from './profilo/profilo.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: "profilo",
        component: ProfiloComponent,

    },
    {
        path: "",
        component: HomeComponent,

    }
];
