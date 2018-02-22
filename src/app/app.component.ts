import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Test";
  code = "";
  id ="";
  isSelected=true;

  getDetails(project){
  
    // this.isSelected=true;
    this.id= project.projectId;
    this.code=project.projectCode;

  }

  projects= [
    {
      projectId: 9689,
      projectCode: 'SEMJQ3',
      projectName: 'Seminar on jQuery 3.x',
      description: 'Seminar will discuss all the new features of jQuery 3.x',
      startDate: new Date(),
      endDate: new Date(),
      strength: 70,
      logo: 'images/jq3.png'
    },
    {
      projectId: 4587,
      projectCode: 'SEMJQ3',
      projectName: 'Seminar on jQuery 3.x',
      description: 'Seminar will discuss all the new features of jQuery 3.x',
      startDate: new Date(),
      endDate: new Date(),
      strength: 70,
      logo: 'images/jq3.png'
    },
    {
      projectId: 2345,
      projectCode: 'SEMJQ3',
      projectName: 'Seminar on jQuery 3.x',
      description: 'Seminar will discuss all the new features of jQuery 3.x',
      startDate: new Date(),
      endDate: new Date(),
      strength: 70,
      logo: 'images/jq3.png'
    },
    {
      projectId: 1234,
      projectCode: 'SEMJQ3',
      projectName: 'Seminar on jQuery 3.x',
      description: 'Seminar will discuss all the new features of jQuery 3.x',
      startDate: new Date(),
      endDate: new Date(),
      strength: 70,
      logo: 'images/jq3.png'
    },
    {
      projectId: 6969,
      projectCode: 'ABCD',
      projectName: 'Seminar on jQuery 3.x',
      description: 'Seminar will discuss all the new features of jQuery 3.x',
      startDate: new Date(),
      endDate: new Date(),
      strength: 70,
      logo: 'images/jq3.png'
    }
  ];
}
