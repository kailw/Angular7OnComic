import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { UsuarioInterface } from '../interface/Interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  usuario: UsuarioInterface;

  constructor(
    private _loginService: LoginService,
    private router: Router
  ) {     
    this._loginService.getCheck().subscribe(usuario => {
      this.usuario = usuario.message;
      if(this.usuario.id != null){
        this.isLogged = true;
        console.log(this.isLogged);
      } else{
        this.isLogged = false;
        console.log(this.isLogged);
      }
    })

  }



  ngOnInit() {


  }


  logout() {
    this._loginService.getLogout().subscribe(usuario => {
      console.log(usuario);
      this.isLogged = false;
    })
  }


}
