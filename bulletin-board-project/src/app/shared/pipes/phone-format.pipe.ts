import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value?: string | null): string {
    if (!value) {
      return '';
    }

    return value
      .replace('+7', '')
      .replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/g, '+7 ($1) $2-$3-$4');
  }
}

@NgModule({
  declarations: [PhoneFormatPipe],
  exports: [PhoneFormatPipe],
})
export class PhoneFormatPipeModule {}