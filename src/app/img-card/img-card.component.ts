import { CatImage } from './../model/catImage';

import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.scss']
})
export class ImgCardComponent implements OnInit {
  
  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  src!: string;

  constructor() {
    this.src = this.image.api + this.image.message;
   }

  ngOnInit(): void {
    this.generateSrc();
  }

  generateSrc(): void {
    this.src = this.image.api + this.image.message + 
    '?size=' + this.image.fontsize +
    '&ts=' + Date.now();
  }

}



