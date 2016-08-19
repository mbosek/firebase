import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ILead } from '../models/lead';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'lead-list',
  styles: [
    require('./lead-list.scss')
  ],
  template: require('./lead-list.html')
})

export class LeadListComponent {
  @Input() filter: string;
  @Input() leads: FirebaseListObservable<ILead[]>;

  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);
}
