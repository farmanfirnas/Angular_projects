import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input()task:{task:string,id:number}={task:"",id:0}
  @Output()removeEvt:EventEmitter<number>=new EventEmitter<number>()
  removeTask(id:number){
    this.removeEvt.emit(id)
  }
  styleClass="pending";
  toggleStatus(){
    if(this.styleClass=="pending"){
      this.styleClass="done"
    }else{
      this.styleClass="pending"
    }
  }
}
