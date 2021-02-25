import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
  public imageBaseURL = 'https://f002.backblazeb2.com/file/client-store';

  @ViewChild('sliderTrack') sliderTrack: ElementRef;
  @ViewChild('slide') slide: ElementRef;

  public slidesList: Slide[] = [
    {
      name: 'Tanya Sinclair',
      role: 'UX Engineer',
      image: '/image-tanya.jpg',
      testimony: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.'
    },
    {
      name: 'John Tarkpor',
      role: 'Junior Front-end Developer',
      image: '/image-john.jpg',
      testimony: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  next(): void {
    console.log(document.body.clientWidth);
    let margin = 10 * 2;

    if (document.body.clientWidth > 730) {
      margin = 50 * 2;
    }


    this.sliderTrack.nativeElement.style.transform = `translateX(-${this.slide.nativeElement.offsetWidth + margin}px)`;
  }

  prev(): void {
    this.sliderTrack.nativeElement.style.transform = 'translateX(0)';
  }
}

export interface Slide {
  name: string;
  role: string;
  testimony: string;
  image: string;
}
