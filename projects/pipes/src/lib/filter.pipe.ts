import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'projects/ui/src/lib/table/customer';
import { TableConfiguration } from 'projects/ui/src/lib/table/table-configuration';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data : Customer[] , key : string , value: string): Customer[] {
      if (!Array.isArray(data) || !key || value === undefined) {
        return data;
      }
      // return data.filter(item => item[key].toLowerCase().includes(value.toLowerCase()));
      return data.filter(customer => customer[key].toLowerCase().includes(value.toLocaleLowerCase()))
  }

}
