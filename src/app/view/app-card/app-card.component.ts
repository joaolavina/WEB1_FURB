import { Component, Input } from '@angular/core';
import { Funcionario } from '../../model/funcionario';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.css'
})
export class AppCardComponent {

  @Input() infoCard: Funcionario = {
    nome: "",
    foto: "",
    email: "",
    subobjeto: {
      propriedade1: "",
      propriedade2: ""
    }
  }
}
