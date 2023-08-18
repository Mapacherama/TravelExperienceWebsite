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
}
