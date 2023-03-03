import { Component,OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServiceAssignment';
  constructor(private dataService:DataServiceService){}

  data:{id:number,name:string}[]=[];
  ngOnInit():void{
    this.data=this.dataService.roomsData
  }

  clickData(){
    alert("clicked")
    this.data=[{"id":1,name:"Farman"}]
  }

}
