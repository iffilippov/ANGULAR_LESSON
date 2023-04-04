import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { NgModel } from '@angular/forms';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {
  private units = ['Байт', 'КБ', 'МБ', 'ГБ', 'ТБ']

  transform(bytes: number = 0, precision: number = 2): string {
    if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
      return '';
    }

    let unit = 0;

    while (bytes > 1024) {
      bytes /= 1024;
      unit++;
    }

    return bytes.toFixed(+precision) + ' ' + this.units[unit];
  }
}

@NgModule({
  declarations: [FileSizePipe],
  exports: [FileSizePipe],
})
export class FileSizePipeModule {}
