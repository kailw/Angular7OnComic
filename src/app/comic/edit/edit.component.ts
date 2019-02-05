import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-comicedit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ComicEditComponent implements OnInit {

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

  atras(){
    this._location.back();
  }

}
