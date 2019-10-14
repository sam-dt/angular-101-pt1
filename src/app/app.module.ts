import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodiComponent } from './codi/codi.component';
import { ColorService } from './color.service';
import { GreetingModule } from './greeting/greeting.module';
import { LengthPipe } from './length.pipe';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, CodiComponent, NotFoundComponent, LengthPipe],
  imports: [BrowserModule, AppRoutingModule, GreetingModule],
  providers: [ColorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
