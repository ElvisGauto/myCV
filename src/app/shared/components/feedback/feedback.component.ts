import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FeedbackService } from '../../services/feedback.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  @Input('feedback') feedback;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  redirectDashCV() {
    this.router.navigate(['/dash-cv']);
  }
}
