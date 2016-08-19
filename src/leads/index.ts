import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';

import { LeadFormComponent } from './components/lead-form';
import { LeadItemComponent } from './components/lead-item';
import { LeadListComponent } from './components/lead-list';
import { LeadsComponent } from './components/leads';
import { LeadDetailsComponent } from './components/lead-details';
import { AutoFocusDirective } from './directives/autofocus-directive';
import { LeadService } from './services/lead-service';


const routes: Routes = [
  {path: 'leads', component: LeadsComponent, canActivate: [AuthGuard]},
  {path: 'leads/:id', component: LeadDetailsComponent, canActivate: [AuthGuard]},
  {path: 'lead', component: LeadFormComponent, canActivate: [AuthGuard]}
];

@NgModule({ 
  declarations: [
    AutoFocusDirective,
    LeadFormComponent,
    LeadItemComponent,
    LeadListComponent,
    LeadsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    LeadService
  ]
})

export class LeadsModule {}

export { LeadService };
