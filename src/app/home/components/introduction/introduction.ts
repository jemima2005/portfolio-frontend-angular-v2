import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var Typed: any;

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.html',
  styleUrls: ['./introduction.scss']
})
export class IntroductionComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (typeof Typed !== 'undefined') {
      new Typed('.typed', {
        strings: [
          'Full-Stack Developer Junior',
          'Computer Science Student',
          'UI/UX Designer',
          'Problem Solver'
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }
  }
}