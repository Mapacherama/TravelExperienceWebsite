import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  getImages(): Promise<any[]> {
    // For now, we'll return a mock promise. You can replace this with an actual HTTP request or other logic.
    return Promise.resolve([
      { source: 'path/to/image1.jpg', alt: 'Description 1', title: 'Title 1' },
      { source: 'path/to/image2.jpg', alt: 'Description 2', title: 'Title 2' },
      // ... more images
    ]);
  }
}
