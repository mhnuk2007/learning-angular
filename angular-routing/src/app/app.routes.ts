import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';
import { Profile } from './pages/profile/profile';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Users } from './pages/users/users';
import { UserDetails } from './pages/user-details/user-details';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'about', component: About},
  {path: 'login', component: Login},
  {path: 'profile', component: Profile},
  {path: 'profile/:id', component: Profile},
  {path: 'users', component: Users},
  {path: 'user-details', component: UserDetails},
  {path: 'user-details/:id', component: UserDetails},
  {path: '**', component: PageNotFound}

];
