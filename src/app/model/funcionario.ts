import { Subobjeto } from "./subobjeto";

export interface Funcionario{
  id?: number,
  nome: String,
  foto: String,
  email: String,
  subobjeto: Subobjeto;
}
