import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from '../model/cadastro';
import { Status } from '../model/status';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private vHttp: HttpClient) {}

  consultar(pCadastroId: number): Observable<Cadastro> {
    return this.vHttp.get<Cadastro>(
      'https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/' +
        pCadastroId
    );
  }

  deletar(pCadastroId: number): Observable<Status> {
    return this.vHttp.delete<Status>(
      'https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/' +
        pCadastroId
    );
  }

  alterar(pCadastro: Cadastro): Observable<Status> {
    return this.vHttp.put<Status>(
      'https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/' +
        pCadastro.id,
      pCadastro
    );
  }
}
