import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import  Schedule  from '../../models/Schedule';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {


  companyName: string = ''

  scheduleUserId: number
  scheduleType: string = ''
  scheduleTeacher: string = ''
  scheduleDate: Date = new Date()

  editCompanyId: number = 0;
  editCompanyName: string = ''

  schedules: Schedule[] = [];


  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.listSchedule()

  }

  listSchedule(): void {
    this.scheduleService.read('schedule').subscribe(response => {
      this.schedules = response.content
      console.log(response.content)
    })
  }

  onCreateCompany(): void {
    const schedule: Schedule = new Schedule()


    schedule.userId = this.scheduleUserId
    console.log(this.scheduleType)
    schedule.type = 1
    schedule.teacher = 'teacher'
    schedule.date=  this.scheduleDate



    this.scheduleService.create(schedule,'schedule').subscribe(response => {
      this.listSchedule()
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
