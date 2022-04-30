import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

import PrimeNgModules from './primeng/primeng.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SingupComponent } from './components/singup/singup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScheduleComponent,
    ListComponent,
    NavbarComponent,
    SidebarComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PrimeNgModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
