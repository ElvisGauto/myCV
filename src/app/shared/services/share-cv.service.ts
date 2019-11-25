import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ShareCVService {

  constructor(private db: AngularFireDatabase) { }

  shareCV(displayName, cvShare) {
    this.db.list(`/cvShare/${displayName}`).push(cvShare);
  }

  showShareCV(displayName) {
    return this.db.list(`/cvShare/${displayName}`);
  }

  deleteShareCv(nameUid: string) {
    return this.db.object(`/cvShared/${nameUid}`).remove();
  }
}
