import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl:string =environment.apiUrlR
  constructor(private httpClient:HttpClient) { }

  public getCharacters$(): Observable<any>{
    console.log(this.baseUrl);
    return this.httpClient.get<any>(`${this.baseUrl}`)
      .pipe(
        map((res:any)=>{ return res.results})
      )

  }
}
