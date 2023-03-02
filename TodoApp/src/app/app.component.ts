import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  taskList:{task:string,id:number}[]=[{task:"Something",id:1}]
  addTask(value:string){
    this.taskList.unshift({task:value,id:this.taskList.length})
  }
  removeTask(id:number){
    this.taskList=this.taskList.filter((e,i)=>{
      return id!==e.id
    })
    
  }
  afterRemoveClick(value:any){
    this.removeTask(value)
  }
}
