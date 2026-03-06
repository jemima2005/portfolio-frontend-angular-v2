import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrls: ['./resume.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}