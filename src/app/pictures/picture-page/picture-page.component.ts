import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-picture-page',
  templateUrl: './picture-page.component.html',
  styleUrls: ['./picture-page.component.css']
})
export class PicturePageComponent implements OnInit {
  imagesBySubject: any;
  responsiveOptions: any[] | undefined;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.imagesBySubject = this.photoService.getImagesBySubject();
    this.responsiveOptions = [
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '768px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '1024px',
          numVisible: 5,
          numScroll: 5
      }
  ];
}
}
