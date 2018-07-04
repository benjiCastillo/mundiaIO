import { Component, OnInit } from '@angular/core';
import { MundialService } from '../service/mundial.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.css']
})
export class StadiumsComponent implements OnInit {
  stadiums = [];
  albumStadiums: Array<any> = [];

  constructor(private mundial: MundialService, private lightbox: Lightbox) {

  }

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos(): void {
    this.mundial.getData()
      .subscribe(
        data => {
          this.stadiums = data.stadiums;
          console.log(this.stadiums);
          this.createAlbum(this.stadiums);
        }
      )
  }

  createAlbum(dataStadiums: any) {
    let i = 0
    dataStadiums.forEach(ele => {
      console.log(ele.name)
      console.log(ele.image)

      const src = ele.image;
      const caption = ele.name;
      const thumb = ele.image;
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };

      this.albumStadiums.push(album);
      i++;

    });

  }

  open(index: number): void {
    this.lightbox.open(this.albumStadiums, index);
  }

}
