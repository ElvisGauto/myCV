import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private db: AngularFireDatabase) { }

  saveChanges(uid:string, list:string, numberEx: string, newData: string) {
    this.db.object(`/cv/${uid}/${list}/${numberEx}`).update(newData);
  }

  addMore(uid: string ,list: string,item:string ,data: any) {
    return this.db.object(`/cv/${uid}/${list}/${item}`).update(data);
  }

}
