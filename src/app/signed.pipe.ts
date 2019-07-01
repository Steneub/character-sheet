import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signed'
})
export class SignedPipe implements PipeTransform {

  transform(num: number, args?: any): any {
    return num >= 0 ? "+"+num : num; 
  }

}