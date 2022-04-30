import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, map  } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';
import { Router } from '@angular/router';


import  Schedule  from '../models/Schedule';

import IResponse from '../models/IResponse';
import Response from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ListService {


  baseUrl: string = 'http://localhost:3333';

  constructor(private httpClient: HttpClient, private router: Router) { }

  private getOptions() {
    const token = localStorage.getItem('token')

    return {
      //headers: { 'Authorization': `Bearer ${token}` },
      // observe: 'response',
      // responseType: 'json'
    }
  }

  listSchedule(): Observable<IResponse<any[]>> {
    const token = localStorage.getItem('token')

    return this.httpClient.get<IResponse<any[]>>(`${this.baseUrl}/schedule`, {
    /*  headers: { 'Authorization': `Bearer ${token}` },*/
      observe: 'response',
      responseType: 'json'
    })
      .pipe(
        map((response) => response.body || new Response<Schedule[]>()),
        catchError((err) => {
          if (err.status === 401) {
            this.router.navigate(['/formulario'])
          }

          throw new Error('Não autorizado')
        })
      )
  }

  createSchedule(company: Schedule): Observable<IResponse<any>> {
    return this.httpClient.post<IResponse<any>>(`${this.baseUrl}/schedule`, company, this.getOptions())
  }

  deleteSchedule(companyId: number): Observable<IResponse<any>> {
    return this.httpClient.delete<IResponse<any>>(`${this.baseUrl}/schedule/${companyId}`, this.getOptions())
  }

  updateSchedule(company: Schedule): Observable<IResponse<any>> {
    return this.httpClient.put<IResponse<any>>(`${this.baseUrl}/schedule/${company.id}`, company, this.getOptions())
  }


}
