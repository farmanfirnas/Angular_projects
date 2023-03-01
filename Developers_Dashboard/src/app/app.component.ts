import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Developers';
  developersData:{name:string,role:string,skills:string[],img:string}[]=[{name:"Farman Malik",role:"Full Stack Developer",skills:["ReactJS","Angular","MongoDb","ExpressJS","Chakra UI"],img:"https://farmanfirnas.github.io/static/media/farman1.c9b38ec15f70a8c955c2.jpg"},
  {name:"Santosh Yadav",role:"Senior Software Engineer",skills:["ReactJS","Angular","TypeScript","HTML","CSS","JavaScript"],img:"https://avatars.githubusercontent.com/u/11923975?v=4"},
  {name:"Aadil Rehman",role:"Assistant System Engineer",skills:["Java","Spring Boot","Python","HTML","CSS"],img:"https://media.licdn.com/dms/image/C4E03AQHv4m0OrITMuA/profile-displayphoto-shrink_800_800/0/1614576586046?e=1683158400&v=beta&t=mBNXb5a35av6Wsgf4JEtCJADXGFQKMCYi0-oxa9GVTY"}
]

}
