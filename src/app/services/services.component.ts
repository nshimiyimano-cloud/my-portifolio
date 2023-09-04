import { Component } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  title="My Services I Offer To The World";
  skills_proficient:any=[
   

    {
      title:"Bootstrap and Core CSS",
      level:99,
         
    },

    {
      title:"Mongo Database",
      level:85,
         
    },

    {
      title:"Mysql Database",
      level:92,
         
    },
    
    {
      title:"Postgres Database",
      level:80,
         
    },
    
    {
    title:"python/flask",
    level:90,
       
  },
  {
    title:"python/Django",
    level:60,
       
  },
  {
    title:"reactJS",
    level:90,
       
  },
  {
    title:"angular 2+",
    level:96,
       
  },

  {
    title:"APis",
    level:96,
       
  },
  {
    title:"Nodejs",
    level:86,
       
  },
  {
    title:"Spring Boot",
    level:78,
       
  }
    
  ];


  tags:any=[
    {
      name:"Angular 2 ++",
      imageName:"../../assets/favicon.ico"
    },
    {
      name:"React Developer",
      imageName:"../../assets/reactjs.png"
    },

    {
      name:"APIs Design",
      imageName:"../../assets/api.png"
    },
    {
      name:"Mongo Database",
      imageName:"v../../assets/mongo.png"
    },

    {
      name:"Dockernization",
      imageName:"../../assets/docker.png"
    },
    {
      name:"React Developer",
      imageName:"../../assets/reactjs.png"
    },

    {
      name:"Backend Development",
      imageName:"../../assets/backend.png"
    },
    {
      name:"Frontend Development",
      imageName:"../../assets/frontend.png"
    }
  ];


  trackByFunc = (index: number, value: string) => index;



}
