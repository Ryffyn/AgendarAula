import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

  }

  login(): void {
    if (this.username != '' || this.password != '') {
    this.loginService.auth(this.username, this.password).subscribe(response => {

      const token = response.token
      const userId = response.id.userId
  
      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)
      if(!response.token){
        alert('Sign in with your account')
      }else{
        this.router.navigate([ '/schedule' ])
      }
    })
  }else{
    alert('Fill the Required fields')
  }
}


}
