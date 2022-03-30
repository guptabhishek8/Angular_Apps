import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-intro';
  a = 35;
 
  age = 0;

  n1=0
  n2=0
  n3=0

  sum(n1:number,n2:number){
    this.n3 = n1*1+n2*1;
  }

  fruits = ['mango', 'apple', 'orange'];

  salary=0;

  eventSalary(event: any){
    this.salary = event.target.value;
  }

  nameOfPerson="Ayush";

  items = ['bottle', 'mouse'];


  addItem(item: string){
    this.items.push(item);
    return this.items;
  }
}
