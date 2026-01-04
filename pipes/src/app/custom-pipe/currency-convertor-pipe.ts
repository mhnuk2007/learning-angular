import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor',
})
export class CurrencyConvertorPipe implements PipeTransform {
  transform(value: number, rate: number = 278, currencySymbol: string = 'PKR'): string {
    if (value == null) return '';
    const converted = value * rate;
    return `${currencySymbol}${converted.toFixed(2)}`;
  }
}
