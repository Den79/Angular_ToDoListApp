import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  //item = {content:"", crossedOut:false};
  itemsArray = [];
  
  // My style for H1 element
  titleStyle = {
    'font-family':'"Wendy One", sans-serif',  
    'font-size':'4.5em'
  }

  addItem(content:string){
    var item = {content, crossedOut:false};
    //this.item.[name] = item;
    this.itemsArray.push(item)

  }

  deleteItem(index){
    this.itemsArray.splice(index, 1);
  }

  deleteAllItems(){
    this.itemsArray = [];
  }
}
