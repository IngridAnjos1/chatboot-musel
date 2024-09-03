import { ChatComponent } from './pages/chat/chat.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"chat",
        component: ChatComponent
    }
];
