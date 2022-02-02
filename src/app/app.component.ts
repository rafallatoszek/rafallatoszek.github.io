import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Section } from './models/section.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  Section = Section;

  @ViewChild('projectsSection') projectsElement: ElementRef;
  @ViewChild('skillsSection') skillsElement: ElementRef;

  public currentActive = Section.Top;
  private topOffset: number = 100;
  private projectsOffset: number;
  private skillsOffset: number;

  ngAfterViewInit() {
    this.projectsOffset = this.projectsElement.nativeElement.offsetTop;
    this.skillsOffset = this.skillsElement.nativeElement.offsetTop;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    this.projectsOffset = this.projectsElement.nativeElement.offsetTop;
    this.skillsOffset = this.skillsElement.nativeElement.offsetTop;
    if (window.pageYOffset < this.topOffset) {
      this.currentActive = Section.Top;
    } else if (window.pageYOffset >= this.topOffset && window.pageYOffset < this.projectsOffset) {
      this.currentActive = Section.Shrink;
    } else if (window.pageYOffset >= this.projectsOffset && window.pageYOffset < this.skillsOffset) {
      this.currentActive = Section.Projects;
    } else if (window.pageYOffset >= this.skillsOffset) {
      this.currentActive = Section.Skills;
    } else {
      this.currentActive = 0;
    }
  }
}
