import { Component, OnInit } from '@angular/core';
import { ShareCVService } from 'src/app/shared/services/share-cv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-share-cv',
  templateUrl: './share-cv.component.html',
  styleUrls: ['./share-cv.component.scss']
})
export class ShareCVComponent implements OnInit {
  cvVisionShare$;
  user: { nameUser: string }

  constructor(
    private shareCvService: ShareCVService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    // var url = window.location.href;
    // if(url.search(/firebaseapp/i) === -1) {
    //   let user = url.slice(22);
    //   this.cvVisionShare$ = this.shareCvService.showShareCV(user);
    // }

    this.user = {
      nameUser: this.activatedRoute.snapshot.params.nameUser
    }
      this.cvVisionShare$ = this.shareCvService.showShareCV(this.user.nameUser);
  }

  element(i) {
    let contact = document.getElementById(i);
    let topPos = contact.offsetTop - 75;

    contact.style.border = '1px solid rgb(24, 223, 17)';
    let dashCV = document.getElementById('dashCV');

    setTimeout(function(){ 
      contact.style.border = '1px solid rgba(0, 0, 0, 0.125)';
    }, 500);

    dashCV.scrollTop = topPos;
  }
}
