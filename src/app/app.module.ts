import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ComicViewComponent } from './comic/view/view.component';
import { ComicPlistComponent } from './comic/plist/plist.component';
import { HttpClientModule } from '@angular/common/http';

//servicios
import { ComicService } from './service/comic.service';
import { LoginService } from './service/login.service';
import { AdminComponent } from './admin/admin.component';
import { ComicEditComponent } from './comic/edit/edit.component';
import { ComicRemoveComponent } from './comic/remove/remove.component';
import { Page404Component } from './page404/page404.component';
import { LogoutComponent } from './logout/logout.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ComicViewComponent,
    ComicPlistComponent,
    AdminComponent,
    ComicEditComponent,
    ComicRemoveComponent,
    Page404Component,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //modulo HTTP
    FormsModule
  ],
  providers: [
    ComicService, //servicio se importa
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
