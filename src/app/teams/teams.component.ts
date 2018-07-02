import { Component, OnInit } from '@angular/core';
import { MundialService } from '../service/mundial.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams = [];

  constructor(private mundial: MundialService) {
    this.obtenerDatos();
   }

  ngOnInit() {
  }

  obtenerDatos(): void {
    this.mundial.getData()
      .subscribe(
        data => {
          this.teams = data.teams;
          console.log(this.teams);
        }
      )
  }

}
