import './rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
//import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './components/dashboard.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroesComponent }      from './components/heroes.component';
import { HeroService }          from './services/hero.service';
import { HeroSearchComponent }  from './components/hero-search.component';
import { routing } from './routes/app.routing';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  //  InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
