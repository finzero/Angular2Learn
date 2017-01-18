import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero-data';

@Injectable()
export class HeroService {

	getHeroes(): Promise<Hero[]> {
	  return Promise.resolve(HEROES);
	}
  constructor() { }

}
