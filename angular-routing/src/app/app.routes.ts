import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { User } from './pages/user/user';
import { Profile } from './pages/profile/profile';
import { Setting } from './pages/setting/setting';
import { PublicSetting } from './pages/public-setting/public-setting';
import { PrivateSetting } from './pages/private-setting/private-setting';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'user', component: User,
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: Profile},
      {path: 'setting', component: Setting,
        children: [
          {path: '', redirectTo: 'public-setting', pathMatch: 'full'},
          {path: 'public-setting', component: PublicSetting},
          {path: 'private-setting', component: PrivateSetting}
        ]
      }
    ]
  },

];
