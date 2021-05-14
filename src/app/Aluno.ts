export class Aluno {
    nome: string;
    idade: number;
    imagem: string;
  
    constructor(nome: string, idade: number, imagem: string) {
      this.nome = nome;
      this.idade = idade;
      this.imagem = "<img =src'"+imagem+"'/>";
    }




    
  }