import { Component, OnInit } from '@angular/core';
import { JournalEntry } from './journal.module';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  entries: JournalEntry[] = [
    {
      title: 'My Upcoming Trip to Paris',
      plannedDate: new Date(2023, 5, 15),
      destination: 'Paris, France',
      content: "I'm so excited about this trip...",
      thingsToDo: ['Visit the Eiffel Tower', 'Explore the Louvre', 'Walk along the Seine'],
      image: '../../assets/images/Planning_The_Trip.jpg',
      notes: 'Remember to book tickets in advance!'
    },
    {
      title: 'My Upcoming Trip to Paris',
      plannedDate: new Date(2023, 5, 15),
      destination: 'Paris, France',
      content: "I'm so excited about this trip...",
      thingsToDo: ['Visit the Eiffel Tower', 'Explore the Louvre', 'Walk along the Seine'],
      image: '../../assets/images/Planning_The_Trip.jpg',
      notes: 'Remember to book tickets in advance!'
    },
    // ... more entries
  ];

  ngOnInit(): void {
    // Any initialization logic can go here
  }
}
