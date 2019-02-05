import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioInterface } from '../interface/Interface';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private _login;
  private _check;
  private _logout;
  usuario: UsuarioInterface;

  constructor(
    private _http: HttpClient,
    private configAPI: ConfigService
    ) {

  }

  getLogin(username: string, password: string): Observable<any> {
    this._login = 'http://localhost:8081/json?ob=usuario&op=login&user=' + username + '&pass=' + password;
    return this._http.get<any>(this._login, this.configAPI.header);
  }

  getCheck(): Observable<any> {
    this._check = 'http://localhost:8081/json?ob=usuario&op=check';
    return this._http.get<any>(this._check,this.configAPI.header);

  }

  getLogout(): Observable<any>  {
    this._logout = 'http://localhost:8081/json?ob=usuario&op=logout';
    return this._http.get<any>(this._logout,this.configAPI.header);
  }

  setUsuario(usuario: UsuarioInterface) {
    console.log(usuario)
    this.usuario = usuario;
  }



}

