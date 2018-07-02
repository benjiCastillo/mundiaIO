import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MundialService {
  url: string = "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get(this.url);
  }

}
