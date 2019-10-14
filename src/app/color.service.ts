import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  colors = ['red', 'blue', 'pink', 'green', 'purple'];

  constructor() {}

  generateRandomColor() {
    return this.colors[Math.floor(Math.random() * (this.colors.length - 1))];
  }
}
