import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() {
    this.copyItems =this.listItems;
  }

  ngOnInit(): void {}
  
  listItems:string[] = [];
  copyItems:string[] = [];

  filterArray(item:string){ 
    if(!item) { 
      this.copy(); 
    }
    else {
    this.listItems = 
    this.copyItems.filter((x)=>{ 
      return x.includes(item) })
  } 
}
    copy()
    { 
      this.listItems=Object.assign([],this.copyItems); 
    }
  
  addItemsToList(items:any){
      this.listItems.push(items.value);
      items.value = '';

  }
  removeItem(i:number){
  this.listItems.splice(i,1);
  }


}
