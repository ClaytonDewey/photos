import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-button',
  templateUrl: './photo-button.component.html',
  styleUrls: ['./photo-button.component.css']
})
export class PhotoButtonComponent implements OnInit {

  constructor(private photoservice: PhotoService) {
    this.photoservice.getPhoto().subscribe(() => {
      
    });
  }

  ngOnInit(): void {
  }

}
