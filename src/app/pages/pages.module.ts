import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CharactersComponent } from './characters/characters.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "../services/api.service";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PagesComponent,
    FavoritesComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ApiService],
})
export class PagesModule { }
