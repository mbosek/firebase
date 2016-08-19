import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from 'src/auth';
import { ILead, Lead } from '../models/lead';


@Injectable()
export class LeadService {
  visibleLeads$: Observable<ILead[]>;
  private username;
  private filter$: ReplaySubject<any> = new ReplaySubject(1);
  private filteredLeads$: FirebaseListObservable<ILead[]>;
  private leads$: FirebaseListObservable<ILead[]>;

  constructor(af: AngularFire, auth: AuthService) {
    const path = `/employees`;

    this.leads$ = af.database.list(path);
    this.filteredLeads$ = af.database.list(path, {query: {
      orderByChild: 'skills',
      equalTo: this.filter$
    }});

    this.visibleLeads$ = this.filter$.switchMap(filter => filter === null ? this.leads$ : this.filteredLeads$);
  }

  filterLeads(filter: string): void {
    if (filter === null){
      this.filter$.next(null);
    } else {
      this.filter$.next(filter);
    }
  }

  createLead(user): firebase.Promise<any> {
    return this.leads$.push(new Lead(user.firstName, user.lastName, user.skills));
  }
}
