import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { UsuarioInterface, TipoUsuarioInterface } from '../interface/Interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  usuario: UsuarioInterface;

  constructor(
    private _loginService: LoginService,
    private router: Router
  ) {

  }


  login() {
    this._loginService
      .getLogin(this.username, this.password).subscribe(usuario => {
        this.usuario = usuario.message;
        if (this.usuario.id != null) {
          console.log(usuario);
          this.router.navigate(['']);
        } else {
          console.log(usuario);
        }
      });

  }

  check() {
    this._loginService.getCheck().subscribe(usuario => {
      console.log(usuario);
    })
  }


  ngOnInit() {
  }

}
