import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }


  public get header(): Object {
    const httpOptions = {
      withCredentials: true
    };
    return httpOptions;
  }
}
