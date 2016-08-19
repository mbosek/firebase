import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILead } from '../models/lead';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'lead-details',
  template: require('./lead-details.html')
})

export class LeadDetailsComponent implements OnInit {

  private sub: any;
  private lead: FirebaseObjectObservable<ILead>;

  constructor(
    private route: ActivatedRoute,
    private af: AngularFire
  ) {}

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      this.lead = this.af.database.object(`/employees/${params['id']}`);
    });
  }

}
