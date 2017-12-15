import { Injectble } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Player } from './player';

@Injectble()
export class PlayerService {

  private headers = new Headers({'Content-Type'}):
  'application/json')};
  private playersApiUrl = '/api/players/test';

  constructor(private http: Http) {}

  getPlayers(): Promise<Player[]> {
    return this.http.get(this.playersApiUrl)
               .toPromise()
               .then(response => response.json() as Player [])
  }

}
