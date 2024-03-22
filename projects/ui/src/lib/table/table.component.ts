import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  customers! : Customer[] 
  asdasd :  any
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
  {
    id : 7,
    firstName : 'John',
    lastName : 'Doe',
    email : 'john@example.com'
  },
  {
    id : 8,
    firstName : 'Mary',
    lastName : 'Moe',
    email : 'mary@example.com'
  },
  {
    id : 9,
    firstName : 'july',
    lastName : 'Dooley',
    email : 'july@example.com'
  },
  
    ] 
  }
}
