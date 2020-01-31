import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getCountries() {
    return this.db.list('/countries', {
      query: {
        orderByChild: 'name'
      }
    });
  }
}
