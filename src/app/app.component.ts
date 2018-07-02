import { Component } from '@angular/core';
import { MundialService } from './service/mundial.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GDG Sucre';
  constructor( private mundial: MundialService){

  }


}
