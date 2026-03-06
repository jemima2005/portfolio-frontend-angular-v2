import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/components/header/header';
import { IntroductionComponent } from './components/introduction/introduction';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { ResumeComponent } from './components/resume/resume';
import { BlogComponent } from './components/blog/blog';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    IntroductionComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ResumeComponent,
    BlogComponent,
    ContactComponent
  ],
  templateUrl: './home.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}