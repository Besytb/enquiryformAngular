import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history:{name:string,phone:string,email:string,message:string}[]=[  ]

  constructor(private enquiryService:EnquiryService) {
    this.history = enquiryService.getEnquiries()
   }

  ngOnInit(): void {
  }

}
