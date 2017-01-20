import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero-data';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {

	private baseApiUrl = 'api/heroes';

	getHeroes(): Promise<Hero[]> {
	  return Promise.resolve(HEROES);
	}

	/*getHeroes(): Promise<Hero[]>{
		return this.http.get(this.baseApiUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
	}*/
	getHero(id: number): Promise<Hero>{
		return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
	}
  constructor(private http: Http) { 
  	console.log("initialization http")
  }

}
