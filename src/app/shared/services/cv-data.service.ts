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

  save(flagRoute: boolean , next: string,uid: string ,list: string, data: string) {
    if(flagRoute) {
      this.router.navigate([`/${next}`])
    }
    return this.db.list(`/cv/${uid}/${list}`).push(data);
  }

  getData() {
    return this.db.object(`/cv`);
  }

  getDataByCategory(uid: string, category: string) {
    return this.db.list(`/cv/${uid}/${category}`)
  }

  getDataByCV(uid: string) {
    return this.db.list(`/cv/${uid}`)
  }
}
