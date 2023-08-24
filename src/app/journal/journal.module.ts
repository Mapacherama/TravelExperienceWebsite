import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalRoutingModule } from './journal-routing.module';
import { JournalComponent } from './journal.component';
import { SharedModule } from '../shared/shared.module';

export interface JournalEntry {
  title: string;
  plannedDate: Date;
  destination: string;
  content: string;
  thingsToDo: string[];
  image?: string;
  notes?: string;
}

@NgModule({
  declarations: [
    JournalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    JournalRoutingModule
  ]
})
export class JournalModule { }
