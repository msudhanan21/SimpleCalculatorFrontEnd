import { Component } from '@angular/core';
import {CalcService} from './calc.service'
import {Calculation} from './calculationModel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleCalculator-FrontEnd';
  num1:  any;
  num2: any;
  result: any;
  calculationHistory: Calculation[] = [];

  constructor(private service: CalcService ) { }

  add() {
    this.service.calculateRequest("A", this.num1, this.num2).subscribe(data => {
      this.result = data;
      console.log(data);
    },
      error => {
        this.result = error.error.message;
      }
    )
    this.clearAllTexts()
  }
  sub() {
    this.service.calculateRequest("S", this.num1, this.num2).subscribe(data => {
      this.result = data;
      console.log(data);
    },
      error => {
        this.result = error.error.message;
      }
    )
    this.clearAllTexts()
  }
  mul() {
    this.service.calculateRequest("M", this.num1, this.num2).subscribe(data => {
      this.result = data;
      console.log(data);
    },
      error => {
        this.result = error.error.message;
      }
    )
    this.clearAllTexts()
  }
  div() {
    this.service.calculateRequest("D", this.num1, this.num2).subscribe(data => {
      this.result = data;
      console.log(data);
    },
      error => {
        this.result = error.error.message;
      }
    )
    this.clearAllTexts()
  }
  history() { 
    this.service.getHistory().subscribe(data => {
      this.calculationHistory = data;
      console.log(data);
    },
      error => {
        this.result = error.error.message;
      }
    )
  }

  clearAllTexts() { 
    this.num1 = '';
    this.num2 = '';
 }
}
