import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-login',
  imports: [TextBoxModule, ButtonModule, CheckBoxModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy{
  constructor() { }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {

  }
}


