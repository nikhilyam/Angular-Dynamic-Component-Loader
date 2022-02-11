import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdService } from './ad.service';

@NgModule({
  imports: [BrowserModule],
  providers: [AdService],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
