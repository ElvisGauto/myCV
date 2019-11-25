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

  save(flagRoute: boolean , next: string,uid: string ,list: string, data: any) {
    if(flagRoute) {
      this.router.navigate([`/${next}`])
    }
    return this.db.object(`/cv/${uid}/${list}`).update(data);
  }

  getData() {
    return this.db.object(`/cv`);
  }

  getDataByCategory(uid: string, category: string) {
    return this.db.list(`/cv/${uid}/${category}`)
  }

  saveAllData(uid: string, allData: any) {
    return this.db.list(`/cvFinished/${uid}`).push(allData);
  }

  showAllData(typeCv: string, uid: string) {
    return this.db.list(`/${typeCv}/${uid}`);
  }

  deleteCv(typeObject: string, uid: string) {
    this.db.object(`/${typeObject}/${uid}`).remove();

    this.router.navigate(['/home']);
  }

  updateData(uid: string, typeList: string, newData: string) {
    return this.db.object(`/cv/${typeList}/${uid}/`).update(newData)
  }
}
