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
      image: '../../assets/images/Paris_Eifel_Tower.png',
      notes: 'Remember to book tickets in advance!'
    },
    {
      title: 'History Trip to Ypres',
      plannedDate: new Date(2023, 10, 14),
      destination: 'Ypres, Belgium',
      content: "Three days to see all about WW1 in Belguim",
      thingsToDo: ['In Flanders Fields Museum', 'Ypres Ramparts', 'Hill 60', 'Essex Farm Cemetery and Dressing Station'],
      image: '../../assets/images/Passchendaele.jpg',
      notes: "This itinerary covers a mix of museums, battlefields, and cemeteries, offering a comprehensive understanding of WW1's impact on Ypres and its surroundings."
    },
    {
      title: 'The essence of Rome: A 5-Day Dive into Antiquity, Culture, and Culinary Delights',
      plannedDate: new Date(2023, 10, 14),
      destination: 'Rome & Vatican City, Italy',
      content: "I will visit iconic sites like the Colosseum, Roman Forum, Pantheon, Vatican City.",
      thingsToDo: ['Colosseum', 'Roman Forum', 'Pantheon', 'Trevi Fountain', 'Sistine Chapel', "St. Peter's Basilica"],
      image: '../../assets/images/Vatican_City.jpg',
      notes: "This itinerary covers a mix of museums, battlefields, and cemeteries, offering a comprehensive understanding of WW1's impact on Ypres and its surroundings."
    },
    // ... more entries
  ];

  ngOnInit(): void {
    // Any initialization logic can go here
  }
}
