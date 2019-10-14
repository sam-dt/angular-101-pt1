import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length',
})
export class LengthPipe implements PipeTransform {
  transform(values: string[], length: number): string[] {
    return values.filter(value => value.length === length);
  }
}
