import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  numbers=[2,3,4,5,6,7,8,9];
  constructor() { }

  ngOnInit(): void {
    
  }

}
