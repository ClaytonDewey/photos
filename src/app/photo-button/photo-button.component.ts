import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-button',
  templateUrl: './photo-button.component.html',
  styleUrls: ['./photo-button.component.css']
})
export class PhotoButtonComponent implements OnInit {
  photoUrl: string = '';

  constructor(private photoservice: PhotoService) {
    this.fetchPhoto()
  }

  onClick() {
    this.fetchPhoto()
  }

  fetchPhoto() {
    this.photoservice.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }

  ngOnInit(): void {
  }

}
