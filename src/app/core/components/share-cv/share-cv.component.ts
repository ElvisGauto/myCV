import { Component, OnInit } from '@angular/core';
import { ShareCVService } from 'src/app/shared/services/share-cv.service';

@Component({
  selector: 'app-share-cv',
  templateUrl: './share-cv.component.html',
  styleUrls: ['./share-cv.component.scss']
})
export class ShareCVComponent implements OnInit {

  cvVisionShare$;
  
  constructor(private shareCvService: ShareCVService) { }

  ngOnInit() {
    let url = window.location.href;
    let user = url.slice(22);
    this.cvVisionShare$ = this.shareCvService.showShareCV(user);
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
