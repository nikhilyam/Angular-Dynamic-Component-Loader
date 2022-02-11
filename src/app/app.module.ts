import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdService } from './ad.service';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';

@NgModule({
  imports: [BrowserModule],
  providers: [AdService],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
