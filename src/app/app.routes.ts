import { Routes } from '@angular/router';
import { ProfiloComponent } from './profilo/profilo.component';
import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';

export const routes: Routes = [
    {
        path: "profilo",
        component: ProfiloComponent,

    },
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "community",
        component: CommunityComponent,
    }
];
