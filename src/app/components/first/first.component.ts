import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  age: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  profile: user_profile

  constructor() { 
    this.profile = {
      studentid: 'B6019938',
      name: 'Methawee Atthawan',
      gender: 'Female',
      birthyear: 1998,
      age: 22,
      email: 'yammybbraimong@gmail.com',
      phone: '091-8347871',
      img: 'https://wallpapershome.com/images/pages/pic_h/15440.jpeg',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
    
  }
  onUserClick($e){
    alert('You '+$e.type+' the button at ('+$e.clientY+')');
  }
  onUserDBclick($e){
    alert('You '+$e.type+' the button');
  }

}
