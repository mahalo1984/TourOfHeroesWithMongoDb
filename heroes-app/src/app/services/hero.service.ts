import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../models/hero';

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private heroesUrl = 'app/heroes';  // URL to web api

  private createHeroUrl = 'http://localhost:3333/api/create-hero';
  private heroesUrl = 'http://localhost:3333/api/heroes';
  private updateHeroUrl = 'http://localhost:3333/api/update-hero';
  private deleteHeroUrl = 'http://localhost:3333/api/delete-hero';


  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  getHero(hid: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.hid === hid));
  }

  delete(id: number): Promise<void> {
    let url = `${this.deleteHeroUrl}/${id}`;
    console.log(url);
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.createHeroUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.updateHeroUrl}/${hero.hid}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
