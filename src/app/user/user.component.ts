import { Component, Input, Output, input, output, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input<User>();
  select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user()?.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user()?.id as string);
  }
}
