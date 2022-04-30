import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }      from './components/login/login.component';
import { ListComponent }      from './components/list/list.component';
import { ScheduleComponent }     from './components/schedule/schedule.component';
import { SingupComponent }     from './components/singup/singup.component';
import { AuthGuardService } from './guards/auth-guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent , canActivate: [AuthGuardService] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuardService] },
  { path: 'singup', component: SingupComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
