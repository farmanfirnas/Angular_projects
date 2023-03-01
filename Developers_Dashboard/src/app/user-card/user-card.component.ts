import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent{
@Input() userData:{name:string,role:string,skills:string[],img:string}={name:"",role:"",skills:["Reactjs"],img:""}
}
