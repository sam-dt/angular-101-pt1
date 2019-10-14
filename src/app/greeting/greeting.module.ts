import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorfyDirective } from '../colorfy.directive';
import { GreetingComponent } from './greeting.component';

@NgModule({
  declarations: [GreetingComponent, ColorfyDirective],
  imports: [CommonModule],
  exports: [GreetingComponent],
})
export class GreetingModule {}
