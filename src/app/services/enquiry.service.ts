import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  enquiries:{name:string,phone:string,email:string,message:string}[] = []
  add=(name:string,phone:string,email:string,message:string)=>{
    this.enquiries.push({
      name,phone,email,message

    })

  }

  getEnquiries=()=>{

     return this.enquiries
  }

  constructor() { }
}
