import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { BlogComponent } from './blog/blog.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    NavbarComponent,
    AboutusComponent,
    ServicesComponent,
    CertificatesComponent,
    BlogComponent,
    HeroBannerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
