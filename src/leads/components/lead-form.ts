import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeadService } from '../services/lead-service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'lead-form',
  styles: [
    require('./lead-form.scss')
  ],
  template: require('./lead-form.html')
})

export class LeadFormComponent {

  private firstName: string = '';
  private lastName: string = '';
  private skills: string = '';

  constructor(public leadService: LeadService) {}

  clear(): void {
    this.firstName = '';
    this.lastName = '';
    this.skills = '';
  }

  submit(): void {

    let user = {
      firstName: this.firstName.trim(),
      lastName: this.lastName.trim(),
      skills: this.skills.trim()
    };

    this.leadService.createLead(user);
    this.clear();
  }
}
