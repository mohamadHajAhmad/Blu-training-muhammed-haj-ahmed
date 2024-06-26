import { Component, OnInit } from '@angular/core';
import { TableConfiguration } from 'projects/ui/src/lib/table/table-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'Blu-training-muhammed-haj-ahmed';

  filterValue:string = '';

  tableConfig : TableConfiguration =  {
    columns : ["First Name" , "Last Name" , "Email"],
    rows : [
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
  onfilterUpdated(value : string) {
    this.filterValue = value;
  }
}
