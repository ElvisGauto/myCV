import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ShareCVService {

  constructor(private db: AngularFireDatabase) { }

  shareCV(displayName, cvShare) {
    this.db.object(`/cvShare/${displayName}`).update(cvShare);
  }

  updateShareCv(uidName: string, list: string, data: string) {
    this.db.object(`/cvShare/${uidName}/${list}`).update(data);
  }

  showShareCV(displayName) {
    return this.db.list(`/cvShare/${displayName}`);
  }

  listCvShare() {
    return this.db.list(`/cvShare/`);
  }

  deleteShareCv(nameUid: string) {
    return this.db.object(`/cvShared/${nameUid}`).remove();
  }
}
