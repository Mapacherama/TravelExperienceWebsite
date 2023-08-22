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
    'Berlin Zoo': [
      { image: 'Elephants_1.jpg', name: 'Elephant in high summer', price: '18€', travelType: 'Nature Spot' },
      { image: 'Pelicans.jpg', name: 'Big birds strutting about', price: '18€', travelType: 'Nature Spot' },
      { image: 'Panda_1.jpg', name: 'Seeing this panda was pretty great', price: '18€', travelType: 'Nature Spot' },
      { image: 'Panda_Eating.jpg', name: 'Panda eating some bamboo', price: '18€', travelType: 'Nature Spot' },
      // ... more images for Brandenburg Gate
    ],
    // ... more subjects
};

  getImagesBySubject(): any{
    return this.imagesBySubject;
  }
}
