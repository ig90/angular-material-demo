import { Component } from '@angular/core';

export interface Cars {
  value: string;
  viewValue: string;
}

export interface Smartphones {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-demo';
  isChecked = false;

  car = '2';

  cars: Cars[] = [
    { value: '1', viewValue: 'Toyota' },
    { value: '2', viewValue: 'Honda' },
    { value: '3', viewValue: 'Mazda' },
    { value: '4', viewValue: 'Lexus' },
  ];

  smartphones: Smartphones[] = [
    { id: 1, name: 'Xiaomi' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Huawei' },
    { id: 4, name: 'OnePlus' },
    { id: 5, name: 'Iphone' }

  ];

  minDate = new Date(1900, 1, 1);
  maxDate = new Date(2001, 1, 1);

  onChange($event) {
    console.log($event);
  }
}
