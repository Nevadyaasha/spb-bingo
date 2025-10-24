import {Component} from '@angular/core';

interface Choice {
  name: string,
  weight: number,
  checked: boolean
}

@Component({
  selector: 'app-root',
  imports: [],
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
  }

  chooseOption(choice: Choice): void {
    choice.checked = !choice.checked;
    if (choice.checked) {
      this.percentage += choice.weight;
    } else {
      this.percentage -= choice.weight;
    }
  }
}
