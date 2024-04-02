import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'projects/ui/src/lib/table/customer';
import { TableConfiguration } from 'projects/ui/src/lib/table/table-configuration';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  obj! :Customer
  keys! : string[]
  filterOfKeys( customer : Customer , value : string , indexOfProperty : number = 1 ) : boolean{
    if(indexOfProperty == this.keys.length) 
      return false

    return customer[this.keys[indexOfProperty]]
    .toLocaleLowerCase()
    .includes(value.toLocaleLowerCase())
    || this.filterOfKeys(customer , value , indexOfProperty +1)

  }
  transform(data : Customer[] , value: string): Customer[] {
    this.obj = data[0];
    this.keys = Object.getOwnPropertyNames(this.obj)
      if (!Array.isArray(data)  || value === undefined) {
        return data;
      }
      value = value.toLocaleLowerCase();

      return data.filter(customer => this.filterOfKeys(customer, value))
        
        
  }

}
