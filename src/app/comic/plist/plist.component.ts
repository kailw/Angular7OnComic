import { Component, OnInit } from '@angular/core';


//servicios
import { ComicService } from '../../service/comic.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comicplist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class ComicPlistComponent implements OnInit {

  public comic = [];
  public errorMsg;

  constructor(
    private _servicio: ComicService,
    private _router: Router) {
  }



  ngOnInit() {
    this._servicio.getComicPage()
      .subscribe(comicGetPage => {
        console.log(comicGetPage);
        this.comic = comicGetPage;
      }, error => this.errorMsg = error.message);
  }

  // view(id) {
  //   this._router.navigate(['/comic/view', id])
  // }

}
