import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import  Schedule  from '../../models/Schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {

  companyName: string = ''

  scheduleUserId: number
  scheduleType: string = ''
  scheduleTeacher: string = 'Professor Xavier'
  scheduleDate: Date 

  

  companies: Schedule[] = [];


  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.listSchedule()
    this.scheduleUserId= Number(localStorage.getItem('userId'))
  }

  listSchedule(): void {
    this.scheduleService.read('schedule').subscribe(response => {
      this.companies = response.content
      console.log(response.content)
    })
  }

  onCreateCompany(): void {
    const schedule: Schedule = new Schedule()


    schedule.userId = this.scheduleUserId
    schedule.type = 1
    schedule.teacher = this.scheduleTeacher
    schedule.date=  this.scheduleDate

    this.scheduleService.create(schedule,'schedule').subscribe(response => {

      if (response.errors !== null && response.errors.length > 0) {
        console.error('Erro ao criar schedule')
      } else {
        this.listSchedule()
      }
    })
  }

  onDeleteCompany(companyId: number): void {
    this.scheduleService.delete(companyId,'schedule').subscribe(response => {
      this.listSchedule()
      if (response.errors !== null && response.errors.length > 0) {
        console.error('Erro ao deletar schedule')
      } else {
        this.listSchedule()
      }
    })
  }






}
