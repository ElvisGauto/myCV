import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) { }

  save(next: string,uid: string ,list: string, data: string) {
    this.router.navigate([`/${next}`])
    return this.db.list(`/cv/${uid}/${list}`).push(data);
  }

  getData() {
    return this.db.object(`/cv`);
  }
}
