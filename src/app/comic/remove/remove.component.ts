import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class ComicRemoveComponent implements OnInit {

  constructor(
    private _location: Location
  ) { }

  
  atras() {
    this._location.back();
  }

  ngOnInit() {
  }

}
