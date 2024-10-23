import { Component, input } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  selecteduser = input.required<User>();

}
