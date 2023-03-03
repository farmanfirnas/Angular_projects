import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  roomsData=[{"id":1,name:"Hello Duniya"}]
  getData(){
    return this.roomsData
  }

  updateName(val:string){
  
    this.roomsData=[{"id":1,name:"Farman"}]
  }
}
