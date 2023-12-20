import { Component } from '@angular/core';

@Component({
  selector: 'hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {
  fileURL='https://drive.google.com/file/d/1DBifLR0QVuH1Qs-T42HG46AaA1n1tDl1/view?usp=sharing';

  resumeMarquee(){
    alert("hello");
  }

}
