import { Component, Input, OnInit } from '@angular/core';
import { SearchedImage } from '../models/SearchedImage';

@Component({
  selector: 'app-searched-image',
  templateUrl: './searched-image.component.html',
  styleUrls: ['./searched-image.component.css']
})
export class SearchedImageComponent implements OnInit {

  @Input() searchedIamge: SearchedImage;

  constructor() {
    this.searchedIamge = new SearchedImage();
  }

  ngOnInit(): void {
  }

}
