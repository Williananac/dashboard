import { Component, Input } from '@angular/core';
import {Router} from "@angular/router"
import { userService } from '../../services/user.service';
import { Base64Service } from '../../core/services/base64.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private router: Router,
              private userService:userService,
              private base64:Base64Service,
              ){ };

  ngOnInit(){
  }

  onLogin(){
    const usuario = document.getElementById('usuario') as HTMLInputElement;
    const senha = document.getElementById('senha') as HTMLInputElement;
    this.userService.getUser(usuario.value.toUpperCase(),senha.value).subscribe(user=>{
      user = user;
      if(user.token != ''){
        this.userService.deslogar();
        this.userService.autorizar(user.token,usuario.value);
        this.router.navigate(['/dash']);
      }
    })


  }




}
