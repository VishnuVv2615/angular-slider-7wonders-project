import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = '7WondersSlide';
  carouselDom: any;
  listItemDom: any;
  thumbnailDom: any;
  runTimeOut: any;
 constructor(){}
  
 ngOnInit(): void {
  this.carouselDom = document.querySelector('.carousel') as HTMLElement;
  this.listItemDom = document.querySelector('.carousel .list') as HTMLElement;
  this.thumbnailDom = document.querySelector('.carousel .thumbnail') as HTMLElement;

  this.runAutoRun();
 }
 ngOnDestroy(): void {
  clearTimeout(this.runTimeOut);
 }
  

 showSlider(type:string):void{
  const itemSlider=document.querySelectorAll('.carousel .list .item');
  const itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
      this.listItemDom.appendChild(itemSlider[0]);
      this.thumbnailDom.appendChild(itemThumbnail[0]);
      this.carouselDom.classList.add('next');
    } else {
      const positionLastItem = itemSlider.length - 1;
      this.listItemDom.prepend(itemSlider[positionLastItem]);
      this.thumbnailDom.prepend(itemThumbnail[positionLastItem]);
      this.carouselDom.classList.add('prev');
    }

    clearTimeout(this.runTimeOut);
    this.runTimeOut = setTimeout(() => {
      this.carouselDom.classList.remove('next');
      this.carouselDom.classList.remove('prev');
    }, 3000);

    this.runAutoRun(); 
  }

  private runAutoRun(): void {
    this.runTimeOut = setTimeout(() => {
      this.showSlider('next');
    }, 7000); 
  }
}
 

