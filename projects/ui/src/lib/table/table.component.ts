import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Customer } from './customer';
import { TableConfiguration } from './table-configuration';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() tableConfig! : TableConfiguration
  @Input() TableWithButton! : TemplateRef<any>
  @Output() filterUpdated = new EventEmitter<any>()
  filterValue:string = '';
  customers! : Customer[] 
  key! : string

  filterUpdate() {
    this.filterUpdated.emit(this.filterValue);
  }

  // getKey(indexOfProperty : number , customer : Customer ) {
  //   this.key = Object.getOwnPropertyNames(customer)[indexOfProperty +1];
  // }

  // inputChanges(value : string){
  //   this.filterValue = value
  // }
}
