import { Component } from '@angular/core';

@Component({
  selector: 'hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {
  fileURL='https://drive.google.com/file/d/11shI8pBubKQTYtuvweRXM6nNFwg51Hd9/view?usp=drive_link';

  resumeMarquee(){
    alert("hello");
  }

}
