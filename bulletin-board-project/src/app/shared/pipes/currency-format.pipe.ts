import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

@NgModule({
  declarations: [CurrencyFormatPipe],
  exports: [CurrencyFormatPipe],
})
export class CurrencyFormatPipeModule {}