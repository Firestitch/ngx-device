import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'osMetaName',
    standalone: true
})
export class OsMetaNamePipe implements PipeTransform {
  public transform(name) {

    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  }

}
