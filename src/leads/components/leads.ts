import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LeadService } from '../services/lead-service';

@Component({
  styles: [
    require('./lead-form.scss')
  ],
  template: require('./leads.html')
})

export class LeadsComponent {
  private filter;
  private candidate;

  constructor(public route: ActivatedRoute, public leadService: LeadService) {
      this.filter = leadService.filterLeads(null);
  }

  searchUser() {
    if (this.candidate === '') {
      this.candidate = null;
    }
    this.leadService.filterLeads(this.candidate);
  }

}
