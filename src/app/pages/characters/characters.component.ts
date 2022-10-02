import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  subscribe$:any;
  public characters:any[]=[];


  ngOnInit(): void {
    this.onListCharacters()
  }

  public onListCharacters(){
    this.subscribe$ = this.apiService.getCharacters$()
      .subscribe((res:any) =>{
        console.log(res)
        this.characters=res;
      })
  }


}
