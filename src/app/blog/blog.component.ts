import { Component } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    
    dots: true,
    prevArrow: `<span class="carousel-control-prev-icon float-start" 
    style="cursor:pointer;margin-top:30%" aria-hidden="true"></span>`,
    nextArrow: `<span class="carousel-control-next-icon float-end"  style="cursor:pointer;margin-top:-40%;margin-right:-30px;"  aria-hidden="true"></span>`,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        prevArrow: `<span class="carousel-control-prev-icon float-start" 
        style="cursor:pointer;margin-top:30%" aria-hidden="true"></span>`,
        nextArrow: `<span class="carousel-control-next-icon float-end"  style="cursor:pointer;margin-top:-66%;margin-right:-25px"  aria-hidden="true"></span>`,
        },
        },
    {
    breakpoint: 860,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: `<span class="carousel-control-prev-icon float-start" 
    style="cursor:pointer;margin-top:70%" aria-hidden="true"></span>`,
    nextArrow: `<span class="carousel-control-next-icon float-end"  style="cursor:pointer;margin-top:-105%;margin-right:-25px"  aria-hidden="true"></span>`,
    },
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<span class="carousel-control-prev-icon float-start" 
    style="cursor:pointer;margin-top:90%" aria-hidden="true"></span>`,
    nextArrow: `<span class="carousel-control-next-icon float-end"  style="cursor:pointer;margin-top:-110%;margin-right:-30px;"  aria-hidden="true"></span>`,
    },
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    },
    },
    {
    breakpoint: 360,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    },
    },
    ],
    };


  slides=[
        
    {
      img:"../../assets/testimonial_joinus_slide.jpeg",
       name:"Kulshrestha SudKul",
      title:"DevOps engineer | Azure architect",
      content:`
    
       He has deep understanding of software architecture and coding standards ensures our applications are scalable and efficient.
       His commitment to quality code and thorough testing reflects his passion for delivering top-notch solutions
       His mastery of various technologies, from Angular and React to MySQL and Python.`
    }, 
    {
      
      img:"../../assets/michu.jpg",
       name:"Impa Michelle",
      title:"Business Analyist | IT Specialist",
      content:`
      
        He not only delivers robust applications but also ensures they align perfectly with our business needs. 
       His commitment to excellence and innovative problem-solving make him an invaluable asset to any project.`
    },
    
    {
      img:"../../assets/David-M.jpg",
       name:"Mohamed Abakar",
      title:"Application Engineer",
      content:`
      Jeanluc's skills as a developer have significantly elevated our projects.
       His expertise in Angular and React is evident in the seamless user interfaces he designs.
        His attention to detail and ability to troubleshoot complex issues make him an invaluable team member. 
      Jeanluc consistently goes above and beyond to ensure project success.`
    },
    {
      img:"../../assets/YAMAMOTO Tetsuya.jpg",
       name:"YAMAMOTO Tetsuya",
      title:"Projects Reviewer",
      content:
      `Working with Jeanluc has been an absolute pleasure.
       His tireless dedication and commitment to excellence are truly inspiring. Even under tight deadlines, Jeanluc manages to have projects ready on time without compromising quality.
        His willingness to assist others and share his expertise demonstrates his genuine team player mentality. 
    `
    },     

    {
      img:"../../assets/Iradukunda Michelle.jpg",
       name:"Iradukunda Michelle",
      title:"IT Innovator",
      content:`
      Jeanluc's role as a website developer has transformed our online presence. 
      His proficiency in creating modern UI, combined with his eye for design, has resulted in 
      websites that are both visually appealing and user-friendly. Jeanluc's dedication 
      to delivering exceptional results and his professionalism make him a pleasure to collaborate with`
    },  
    
      
  {
      img:"../../assets/aman-zaghul.png",
       name:"Eman Zaghloul",
      title:"Software Engineer",
      content:`
      Jeanluc's dedication and hardworking attitude have left a lasting impression on us. His commitment to each project, from development to implementation, is truly commendable. 
      Not only does he consistently deliver projects on time, but he also goes above and beyond to ensure they meet our exact requirements. 
     
      
      `
    },    
 

    {
      img:"../../assets/Gift Chimphonda.jpg",
       name:"Gift Chimphonda",
      title:"Application Support Specialist",
      content:`      
      As a developer, Jeanluc's skill set and commitment to quality are truly commendable.
       His expertise in Angular, React, and Python shines through in every project he takes on.
        His ability to tackle complex challenges head-on and his knack for finding efficient solutions make him an asset to any development team.`
    },
    {
      img:"../../assets/nikhil.png",
       name:"Nikhil Tiwari",
      title:"Founder of Niks Consulting",
      content:`
      Throughout the Work, Jean Luc demonstrated a strong interest in learning new
      skills and showed great enthusiasm for their work. Their performance exceeded
      our expectations, and their dedication to their role and responsibilities was
      commendable.`
    },
    {
      img:"../../assets/chriss.jpg",
      name:"Nsengiyumva Chriss",
      title:"Software Developer",
      content:`
      Your contributions as a software developer have been exceptional.
      along with his problem-solving abilities, have been instrumental in developing software solutions that streamline our operations. 
      His collaborative approach and commitment to excellence make him an outstanding professional to work with.`
      
      
    }  

  ];






}
