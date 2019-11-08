import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  messageSuccessful() {
   return this.db.object('/message/successful');
  }

  messageError() {
    return this.db.object('message/error');
  }
}
