import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { AuthService } from '../service/auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userId: string;
  public password: string;
  modalRef: BsModalRef;

  constructor(private router: Router,
              private loginService: LoginService,
              private authService: AuthService,
              private modalService: BsModalService) { }

  public login(template: TemplateRef<any>) {
    this.loginService.login(this.userId, this.password).subscribe((result: boolean) => {
      if (result) {
        this.authService.login();
        this.router.navigate(['details']);
      } else {
        this.modalRef = this.modalService.show(template);
      }
    });
  }
}


