import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.patientsDetails;
  }

 patientsDetails = [{
   name:'Varun Bose',
   gender:'Male',
   age:'32',
   mobile:'7609947483',
   appoinment:'05.10',
   waited:'56 mins',
   status:'Vitals'
 },
{
  name:'John Wick',
  gender:'Male',
  age:'45',
  mobile:'8015295125',
  appoinment:'04.30',
  waited:'26 mins',
  status:'Vitals'
},{
  name:'Johny lve',
  gender:'Male',
  age:'31',
  mobile:'2035006370',
  appoinment:'03.50',
  waited:'26 mins',
  status:'Vitals'
},
{
  name:'Sufiya',
  gender:'Male',
  age:'28',
  mobile:'9245787845',
  appoinment:'03.45',
  waited:'1.35 Hrs',
  status:'Vitals'
},
{ 
  name:'David John',
  gender:'Male',
  age:'55',
  mobile:'6154817037',
  appoinment:'06.10',
  waited:'Not Arrived',
  status:'Checkin'
},
{ 
  name:'Emma',
  gender:'Male',
  age:'30',
  mobile:'7608440455',
  appoinment:'06.30',
  waited:'Not Arrived',
  status:'Checkin'
}]
}
