import { Component } from '@angular/core';

@Component({
  selector: 'app-picture-page',
  templateUrl: './picture-page.component.html',
  styleUrls: ['./picture-page.component.css']
})
export class PicturePageComponent implements OnInit{
  photos: any[] = [
    { source: 'path/to/image1.jpg', alt: 'Description 1', title: 'Title 1' },
    { source: 'path/to/image2.jpg', alt: 'Description 2', title: 'Title 2' },
    // ... more images
  ];
  responsiveOptions: any[] | undefined;
}
