import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Student } from 'src/app/student';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  Students :Student[]
 searchValue:string
  constructor(private serv:ServiceService) { }

  ngOnInit(): void {
     this.get()
  }

  get(){
    this.serv.getData().subscribe((res:Student[])=>{
      this.Students=res
      alert(" Data recieve successfull !!")
    })
  }
  search(){

  }

}
