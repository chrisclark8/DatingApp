import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_servcies/auth.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { AlertifyService } from '../_servcies/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      // console.log('registration sucessful');
      this.alertify.success('Registration sucessful');
    }, error => {
      // console.log(error);
      this.alertify.error(error);
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
    // console.log('cancelled');
  }

}
