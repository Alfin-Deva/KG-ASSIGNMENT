import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {DataServiceService}from '../data-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.scss']
})
export class AppoinmentsComponent implements OnInit {
  fromTime: number = 0;
  toTime: number = 0;

  timeslotForm = new FormGroup({
    fromTime: new FormControl(''),
    toTime: new FormControl(''),
  });
  constructor(private dataService:DataServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAppoinment();
  }

  finalResponse;
  addSlots(){
    const fromTime :string  = this.timeslotForm.get('fromTime').value;
    const timeArray: string [] = fromTime.split(':');
      if ( this.fromTime <= Number(timeArray[0]) && this.toTime <=  Number(timeArray[0])) {
        let hours: any = 0;
        let minutes: any = Number(timeArray[1]) + 30;
        if (Number(timeArray[0]) >= 24) {
          if (minutes > 60) {
            hours = '0' + 1;
            minutes = ((((minutes - 60) < 10) ? '0' : '') + (minutes - 60))
          } {
            hours = '0' + 0;
          }
        } else {
          hours = Number(timeArray[0]);
          if (minutes > 60) {
            hours = ((((hours + 1) < 10) ? '0' : '') + (hours + 1))
            minutes = ((((minutes - 60) < 10) ? '0' : '') + (minutes - 60))
          }
        }
        const toTime: string = ((hours === '24') ? '00' : hours) + ':' + minutes;
        this.timeslotForm.get('toTime')?.setValue(toTime);
        const data = {
          fromTime: fromTime,
          toTime: toTime
        };
        this.dataService.sendPostRequest(data, 'users').then((res) => {
          this.finalResponse = res;
          location.reload();
          this.toastr.success("Successfully Appoinment Booked..!",'Appoinment')
          // if(res?.error) {
          //   this.timeslotForm.setErrors({timeSlotExist: true})
          // } else {
          //   // this.getTimeSlot();
          // }
        })
      } else {
        this.timeslotForm.setErrors({minMax: true})

      }
  }

 getResponse:any;
 mTimeSlot:any[];
 eTimeSlot:any[];
getAppoinment(){

  this.mTimeSlot = [];
  this.eTimeSlot = [];
  this.dataService.sendPostRequest('','getUsers').then((res: any) => {
      const timeSlotArray: any[] = res;
      for (let index = 0; index < timeSlotArray.length; index++) {
        const element = timeSlotArray[index];
        let result: any = '' ;
        const time = element.fromTime.split(':');
        let hours: any = Number(time[0]);
        let minutes: any = Number(time[1]);
        var prefix = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        result = hours + ':' + minutes + ' ' + prefix,
        element['fromTime'] = result;
        if( element['fromTime']?.includes('AM')) {
          this.mTimeSlot.push(element);
        } else {
          this.eTimeSlot.push(element);
        }
      }      
  })
}

}
