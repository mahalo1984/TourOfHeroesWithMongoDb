import '../rxjs-extensions';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// Impots for laoding & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';

import { AppComponent }         from '../components/app.component';
import { DashboardComponent }   from '../components/dashboard.component';
import { HeroDetailComponent }  from '../components/hero-detail.component';
import { HeroesComponent }      from '../components/heroes.component';
import { HeroService }          from '../services/hero.service';
import { HeroSearchComponent }  from '../components/hero-search.component';
import { routing } from '../routes/app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
