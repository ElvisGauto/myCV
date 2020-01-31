import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private db: AngularFireDatabase) { }

  saveChanges(typeCv: string, uid: string, list: string, numberEx: string, newData: string) {
    this.db.object(`/${typeCv}/${uid}/${list}/${numberEx}`).update(newData);
  }

  updateData(typeCv: string, uid: string, list: string, newData: string) {
    this.db.object(`/${typeCv}/${uid}/${list}`).update(newData);
  }

  addMore(typeCv: string, uid: string , list: string, item: string , data: any) {
    return this.db.object(`/${typeCv}/${uid}/${list}/${item}`).update(data);
  }

  delete(typeCv: string, uid: string , list: string, item: string) {
    return this.db.object(`/${typeCv}/${uid}/${list}/${item}`).remove();
  }
}
