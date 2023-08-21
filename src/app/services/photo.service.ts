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

  getImagesBySubject(): any{
    return {
      'Subject 1': [
        { source: 'path-to-image1.jpg', alt: 'Description 1' },
        { source: 'path-to-image2.jpg', alt: 'Description 2' },
        // ... more images for Subject 1
      ],
      'Subject 2': [
        { source: 'path-to-image3.jpg', alt: 'Description 3' },
        // ... more images for Subject 2
      ],
      // ... more subjects
    };
  }
}
