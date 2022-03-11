import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../student';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(Students:Student[], searchValue:string) {
    if(!Students || !searchValue){
      return Students;
    }
    return Students.filter(student=>
      student.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      student.email.toLowerCase().includes(searchValue.toLowerCase()) ||
      student.age.toString().includes(searchValue.toLowerCase())  ||
      student.id.toString().includes(searchValue.toLowerCase())  
      
      
      
      );
  }

}
