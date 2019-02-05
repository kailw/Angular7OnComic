import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ComicViewComponent } from './comic/view/view.component';
import { ComicPlistComponent } from './comic/plist/plist.component';
import { ComicRemoveComponent } from './comic/remove/remove.component';
import { ComicEditComponent } from './comic/edit/edit.component';
import { Page404Component } from './page404/page404.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/logout', component: LogoutComponent },
  

  { path: 'comic/plist', component: ComicPlistComponent },
  { path: 'comic/view/:id', component: ComicViewComponent },

  { path: 'admin/comic/edit/:id', component: ComicEditComponent },
  { path: 'admin/comic/remove/:id', component: ComicRemoveComponent },
  { path: '**', component: Page404Component } //page404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

