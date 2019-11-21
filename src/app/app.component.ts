import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  //item:string;
  itemsArray = [];
  
  constructor (){ }

  addItem(item:string){
    this.itemsArray.push(item)
  }

  deleteItem(){
    
  }
}
