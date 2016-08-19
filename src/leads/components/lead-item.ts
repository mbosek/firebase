import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ILead } from '../models/lead';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'lead-item',
  styles: [
    require('./lead-item.scss')
  ],
  template: require('./lead-item.html')
})

export class LeadItemComponent {
  @Input() lead: ILead;
  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);

  constructor(private router: Router) {}

  editing: boolean = false;
  title: string = '';

  editTitle(): void {
    this.router.navigate(['/leads/2']);
  }

  stopEditing(): void {
    this.editing = false;
  }

}
