import { Component, OnInit } from '@angular/core';
import { MundialService } from '../service/mundial.service'; 

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.css']
})
export class StadiumsComponent implements OnInit {
  stadiums=[];
  constructor( private mundial: MundialService) {

   }

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos():void{
    this.mundial.getData()
    .subscribe(
      data=>{
        this.stadiums = data.stadiums;
        console.log(this.stadiums);
      }
    )
  }

}
