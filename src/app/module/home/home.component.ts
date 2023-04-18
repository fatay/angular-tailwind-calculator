import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  calValue: number = 0;
  functionName: any = 'NoFunction';
  calNumber: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickButton(val: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }

    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {
    if (this.functionName == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.functionName = val;
    } else {
      this.secondNumber = this.calValue;
      this.calculate(val);
    }
  }

  calculate(val: string) {
    // sum
    if (this.functionName == '+') {
      const total = this.firstNumber + this.secondNumber;
      this.assignValues(total, val);

      if (this.functionName == '=') {
        this.onEqualPress();
      }
    }

    // extraction
    if (this.functionName == '-') {
      const total = this.firstNumber - this.secondNumber;
      this.assignValues(total, val);

      if (this.functionName == '=') {
        this.onEqualPress();
      }
    }

    // divide
    if (this.functionName == '/') {
      const total = this.firstNumber / this.secondNumber;
      this.assignValues(total, val);

      if (this.functionName == '=') {
        this.onEqualPress();
      }
    }

    // multiplication
    if (this.functionName == '*') {
      const total = this.firstNumber * this.secondNumber;
      this.assignValues(total, val);

      if (this.functionName == '=') {
        this.onEqualPress();
      }
    }

    // percentage
    if (this.functionName == '%') {
      const total = this.firstNumber % this.secondNumber;
      this.assignValues(total, val);

      if (this.functionName == '=') {
        this.onEqualPress();
      }
    }
  }

  assignValues(total: number, val: string) {
    this.calValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.functionName = val;
  }

  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.functionName = 'NoFunction';
    this.calNumber = 'noValue';
  }

}
