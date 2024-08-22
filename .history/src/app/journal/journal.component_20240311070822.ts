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
      plannedDate: new Date(2026, 5, 15),
      destination: 'Paris, France',
      content: "I'm so excited about this trip...",
      thingsToDo: ['Visit the Eiffel Tower', 'Explore the Louvre', 'Walk along the Seine'],
      image: '../../assets/images/Paris_Eifel_Tower.png',
      notes: 'Remember to book tickets in advance!'
    },
    {
      title: 'History Trip to Ypres',
      plannedDate: new Date(2024, 5, 14),
      destination: 'Ypres, Belgium',
      content: "Three days to see all about WW1 in Belguim",
      thingsToDo: ['In Flanders Fields Museum', 'Ypres Ramparts', 'Hill 60', 'Essex Farm Cemetery and Dressing Station'],
      image: '../../assets/images/Passchendaele.jpg',
      notes: "This itinerary covers a mix of museums, battlefields, and cemeteries, offering a comprehensive understanding of WW1's impact on Ypres and its surroundings."
    },
    {
      title: 'The essence of Rome: A 5-Day Dive into Antiquity, Culture, and Culinary Delights',
      plannedDate: new Date(2024, 10, 14),
      destination: 'Rome & Vatican City, Italy',
      content: "I will visit iconic sites like the Colosseum, Roman Forum, Pantheon, Vatican City.",
      thingsToDo: ['Colosseum', 'Roman Forum', 'Pantheon', 'Trevi Fountain', 'Sistine Chapel', "St. Peter's Basilica"],
      image: '../../assets/images/Vatican_City.jpg',
      notes: "This itinerary covers a mix of museums, battlefields, and cemeteries, offering a comprehensive understanding of WW1's impact on Ypres and its surroundings."
    },
    {
      title: 'Bayern Match Meets Munich: History, Culture, and Modernity Unveiled.',
      plannedDate: new Date(2024, 6, 14),
      destination: 'Munich, Germany',
      content: "I will go to my first Bayern Munchen match and combining it with seeing the city",
      thingsToDo: ['Visit the Olympic Park', ' BMW Welt and Museum', 'Breakfast at Viktualienmarkt', 'Bayern Munich match to see Kane', 'Alte Pinakothek', "Residenz, the former royal palace of the Wittelsbach monarchs of Bavaria."],
      image: '../../assets/images/Munich_Church.jpg',
      notes: "This itinerary covers a mix of museums, battlefields, and cemeteries, offering a comprehensive understanding of WW1's impact on Ypres and its surroundings."
    },
    {
      title: "Discovering Plitvice: A Journey Through Croatia's Enchanted Waters and Forests",
      plannedDate: new Date(2024, 8, 14),
      destination: 'Plitvice National Park, Croatia',
      content: "Journey through its enchanting waters and lush forests, and embarking on a memorable journey through one of Croatia's most iconic destinations.",
      thingsToDo: ['Full-Day Exploration of the Upper and Lower Lakes', 'Wildlife and Birdwatching Tour', "Hiking Adventure to the Park's Peaks", 'Photography Expedition', 'Cultural and Historical Tour'],
      image: '../../assets/images/Platvice_National_Park.jpg',
      notes: "This itinerary covers a mix of museums, battlefields, and cemeteries, offering a comprehensive understanding of WW1's impact on Ypres and its surroundings."
    },
    // ... more entries
  ];

  ngOnInit(): void {
    // Any initialization logic can go here
  }
}
