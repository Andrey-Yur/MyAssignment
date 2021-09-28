import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {MatOption} from '@angular/material/core';

export interface Employee{
  name:string,
  department: string,
  numYears: number,
  dateJoined:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  @Output() public titleVal = new EventEmitter();
  @ViewChild('option',{static:true}) public matOption!:MatOption;
  public sortedEmployee!:Employee[];
  public department ='';
  public dateJoined = '';
  public numYears='';
  public title = 'My assignment';
  @Input() value: any

constructor( ) {
}

public ngOnInit(): void {
  this.titleVal.emit(this.title);

  this.sortedEmployee=this.employees.sort((a:Employee,b:Employee) => {
       let nA = a.name.toLowerCase();
       let nB = b.name.toLowerCase();

       if(nA < nB)
         return -1;
       else if(nA > nB)
         return 1;
       return 0;
     }
   );
  }

  public employees:Employee[] = [
    {name:'Wendy Casey',department:'Sales',numYears:3,dateJoined:'7/13/2018'},
    {name:'Alicia Stevens',department:'IT',numYears:3,dateJoined:'7/16/2018'},
    {name:'Valerie Simpson',department:'Customer Care',numYears:2,dateJoined:'7/9/2019'},
    {name:'Lenard Banks',department:'Accounting',numYears:1,dateJoined:'7/20/2020'},
    {name:'Lynn Cannon',department:'Accounting',numYears:2,dateJoined:'7/11/2019'},
    {name:'Stacie Richards',department:'IT',numYears:2,dateJoined:'7/1/2020'}
  ];

  public setValues(value:any):void {

  this.dateJoined=value.dateJoined;
  this.numYears=value.numYears;
  this.department=value.department;
  }

}
