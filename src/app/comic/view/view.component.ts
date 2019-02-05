import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; //leer una ruta
import { ComicService } from "../../service/comic.service";
import { ComicInterface } from 'src/app/interface/Interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comicview',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ComicViewComponent implements OnInit {

  public comic = [];
  public comicColeccion = [];
  public errorMsg;

  constructor(
    private ruta: ActivatedRoute, // va tomar diferentes parametros
    private _servicio: ComicService,
    private _location: Location
  ) {

  }

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      // this.comic = this._servicio.getUno(params['id']);
      console.log(params['id']);
      this._servicio.getComic(params['id'])
        .subscribe(comicView => {
          this.comic = Object.values(comicView);
          this.comicColeccion = this.comic[1].obj_coleccion;
          this.comic = this.comic[1];
          console.log(this.comic)
        }, error => this.errorMsg = error
        )
    })
  }
  

  atras() {
    this._location.back();
  }

}

