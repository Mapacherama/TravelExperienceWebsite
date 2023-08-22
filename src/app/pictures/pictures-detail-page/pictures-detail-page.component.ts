import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-pictures-detail-page',
  templateUrl: './pictures-detail-page.component.html',
  styleUrls: ['./pictures-detail-page.component.css']
})
export class PicturesDetailPageComponent implements OnInit {

  subjectName: string | any;
  images!: any[];
  responsiveOptions: any;

  constructor(private route: ActivatedRoute, private photoService: PhotoService) {}

  ngOnInit() {
    this.subjectName = this.route.snapshot.paramMap.get('subjectName');
    this.images = this.photoService.getImagesBySubject()[this.subjectName];
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
