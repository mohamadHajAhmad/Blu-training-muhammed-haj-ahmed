import { Component, Input, OnInit } from '@angular/core';
import { Customer } from './customer';
import { TableConfiguration } from './table-configuration';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() tableConfig! : TableConfiguration
  filterValue:string = '';
  customers! : Customer[] 
  asdasd :  any
  key! : string
ngOnInit(): void {
  this.customers = [
    {
      id : 1,
      firstName : 'John',
      lastName : 'Doe',
      email : 'john@example.com'
    },
    {
      id : 2,
      firstName : 'Mary',
      lastName : 'Moe',
      email : 'mary@example.com'
    },
    {
      id : 3,
      firstName : 'july',
      lastName : 'Dooley',
      email : 'july@example.com'
    },
    {
      id : 4,
    firstName : 'John',
    lastName : 'Doe',
    email : 'john@example.com'
  },
  {
    id : 5,
    firstName : 'Mary',
    lastName : 'Moe',
    email : 'mary@example.com'
  },
  {
    id : 6,
    firstName : 'july',
    lastName : 'Dooley',
    email : 'july@example.com'
  },
    
    ] 
  }
  inputFocus(column : string) {
    this.key = column;
  }
  inputChanges(value : string){
    this.filterValue = value
    console.log('dsad')
  }
}
