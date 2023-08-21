import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  constructor() { }

  getImages(): any[] {
    // For now, we'll return a mock promise. You can replace this with an actual HTTP request or other logic.
    return [
      { source: '../../assets/images/4HiQCeKePLm3bOknwe2HdaIbvbd4VSNtPoBO1ibvhiI-1537x2048.jpg', alt: 'Description 1', title: 'Title 1' },
      { source: '../../assets/images/MzDDFx6PsYJKP8KZl69Hqfe6Rsbu0Ktqig7_m1qPtjI-1537x2048.jpg', alt: 'Description 2', title: 'Title 2' },
      // ... more images
    ];
  }

  imagesBySubject = {
    'Brandenburg Gate': [
      { image: 'brandenburg_gate.jpg', name: 'Brandenburg Gate at Dusk', price: 'Free', inventoryStatus: 'Must See' },
      { image: 'brandenburg_gate_day.jpg', name: 'Brandenburg Gate Daytime', price: 'Free', inventoryStatus: 'Iconic' },
      // ... more images for Brandenburg Gate
    ],
    'Berlin Wall': [
      { image: 'berlin_wall.jpg', name: 'Berlin Wall Remnants', price: 'Free', inventoryStatus: 'Historical' },
      // ... more images for Berlin Wall
    ],
    'Museum Island': [
      { image: 'museum_island.jpg', name: 'Pergamon Museum', price: '20€', inventoryStatus: 'Cultural' },
      // ... more images for Museum Island
    ],
    // ... more subjects
  };


  getImagesBySubject(): any{
    return this.imagesBySubject;
  }
}
