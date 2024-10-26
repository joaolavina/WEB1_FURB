import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastroService } from '../../controller/cadastro.service';
import { Cadastro } from '../../model/cadastro';
import { Status } from '../../model/status';

@Component({
  selector: 'app-app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app-cadastro.component.html',
  styleUrl: './app-cadastro.component.css',
})
export class AppCadastroComponent {
  constructor(private vCadastroService: CadastroService) {}

  vCadastroId: number = 0;
  vStatus: Status = {
    status: '',
    mensagem: '',
  };

  vCadastro: Cadastro = {
    id: 0,
    nome: '',
    departamento: '',
    endereco: '',
    email: '',
  };

  buscaCadastro(pCadastroId: number): void {
    this.vCadastroService.consultar(pCadastroId).subscribe({
      next: (pCadastro) => {
        this.vCadastro = pCadastro;
      },
    });
  }

  deletaCadastro(pCadastroId: number): void {
    this.vCadastroService.deletar(pCadastroId).subscribe({
      next: (pStatus) => {
        this.vStatus = pStatus;
      },
    });
  }

  alteraCadastro(): void {
    this.vCadastroService.alterar(this.vCadastro).subscribe({
      next: (pStatus) => {
        this.vStatus = pStatus;
      },
    });
  }
}
