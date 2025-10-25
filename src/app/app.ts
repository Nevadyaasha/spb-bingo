import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {OptionCaseComponent} from './components/option-case/option-case.component'
import {Choice} from './models/choice';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    OptionCaseComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  checkList: Choice[] = [
    {
      name: 'Жрал в Вольчеке',
      weight: 3,
      checked: false,
    },
    {
      name: 'Гулял по Смоленскому кладбищу',
      weight: 8,
      checked: false,
    },
    {
      name: 'Опаздывал на развод мостов',
      weight: 4,
      checked: false,
    },
    {
      name: 'Заходил в пышечную',
      weight: 3,
      checked: false,
    },
    {
      name: 'Избегал Невского проспекта',
      weight: 12,
      checked: false,
    },
    {
      name: 'Пил в Рюмочной',
      weight: 4,
      checked: false,
    },
    {
      name: 'Закупался на сенном рынке',
      weight: 11,
      checked: false,
    },
    {
      name: 'Осуждал москвичей',
      weight: 13,
      checked: false,
    },
    {
      name: 'Ел у китайцев на апрашке',
      weight: 10,
      checked: false,
    },
    {
      name: 'Смотрел, как чайка ест крысу',
      weight: 9,
      checked: false,
    },
    {
      name: 'Лицезрел солевых',
      weight: 6,
      checked: false,
    },
    {
      name: 'Впадал в депрессию',
      weight: 17,
      checked: false,
    },
  ];
  percentage = 0;
  areResultsShown = false;

  showResults(): void {
    this.areResultsShown = true;
    this.checkList.forEach((item: Choice) => {
      if (item.checked) {
        this.percentage += item.weight;
      }
    })
  }
}
