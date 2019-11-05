import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private db: AngularFireDatabase) { }

  saveProfile(product) {
    return this.db.list('/profile').push(product);
  }
}
