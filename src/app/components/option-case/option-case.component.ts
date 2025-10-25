import {Component, input} from '@angular/core';
import {Choice} from '../../models/choice';

@Component ({
  selector: 'option-case',
  templateUrl: './option-case.component.html',
  styleUrls: ['./option-case.component.css'],
})
export class OptionCaseComponent {
  value = input.required<Choice>();
  isBlocked = input(false);
  choose(): void {
    this.value().checked = !this.value().checked;
  }
}
