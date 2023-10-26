import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TabsComponent} from './tabs.component';
import {HomeComponent} from './posts/home.component';
import {PostsFeedComponent} from './posts/posts-feed.component';
import {PostComponent} from './posts/post.component';
import {AccountComponent} from './account/account.component';
import {LoginComponent} from './account/login.component';
import {RegisterComponent} from './account/register.component';
import {UsersComponent} from './admin/users.component';
import {AuthenticatedGuard} from './guards';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthenticatedGuard]
      },
      {
        path: 'posts',
        component: PostsFeedComponent
      },
      {
        path: 'posts/:id',
        component: PostComponent
      },
      {
        path: 'account',
        component: AccountComponent,
        canActivate: [AuthenticatedGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthenticatedGuard]
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
