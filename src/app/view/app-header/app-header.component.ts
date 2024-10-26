import { Component } from '@angular/core';
import { AppNavComponent } from '../app-nav/app-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppNavComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {

}
