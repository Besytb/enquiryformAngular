import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  enquiryForm=this.fb.group({
    name:["",[Validators.required]],
    phone:["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    message:["",[Validators.required]]

  })

  constructor( private router:Router,private enquiryService:EnquiryService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  submit(){
    if(this.enquiryForm.valid==false){
      
      alert("form is invalid")
      
    }else{
    const name=this.enquiryForm.value.name
    const phone=this.enquiryForm.value.phone
    const email=this.enquiryForm.value.email
    const message=this.enquiryForm.value.message
    this.enquiryService.add(name,phone,email,message)
  this.router.navigateByUrl("/history")
    }

  }

}
