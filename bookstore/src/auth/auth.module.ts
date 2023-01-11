import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ShareModule } from 'src/app/share/share.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports:[LoginComponent]
})
export class AuthModule { }
