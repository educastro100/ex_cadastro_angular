import { Component } from '@angular/core';
import { Aluno } from './Aluno'; // Importa classe
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'projeto';

  // Variável usada para selecionar o usuário que clicou
  button = "Cadastrar";

  selecionado: any = null;
  teste = "https://i.pinimg.com/564x/e5/5b/53/e55b53be08d4cb7b5486caee6a5992a6.jpg";
  teste2 = "https://i.pinimg.com/564x/e5/5b/53/e55b53be08d4cb7b5486caee6a5992a6.jpg";
  formulario = false;
  form = false;

  nome_pessoa = '';
  idade_pessoa = 0;
  img_pessoa = '';

  obj_aluno = Aluno;

  // Declara os objetos
  alunos = [
    new Aluno('Eduardo', 22, 'https://i.pinimg.com/564x/e5/5b/53/e55b53be08d4cb7b5486caee6a5992a6.jpg'),
    new Aluno('Felipe', 14, 'teste2.png'),
    new Aluno('Marina', 16, 'teste3.png')
  ]

  selecionar(aluno: any) {
    //console.log(aluno);
    this.selecionado = aluno;
    this.formulario = true;
    this.form = false;
    this.teste = 'data:image/png;base64,' + aluno.imagem;
    console.log(this.teste);
  }

  cadastrar() {
    this.selecionado = this.button;
    this.formulario = false;
    this.form = true;
  }


  cadastrarDados() {
    console.log('teste dados');

    var valida = this.verificaPessoa(this.nome_pessoa);
    if (valida == true){
      if(this.nome_pessoa != ""){
        this.alunos.push(new Aluno(this.nome_pessoa, this.idade_pessoa, this.img_pessoa));
        alert("Usuário registrado com sucesso!");
      }else{
        alert("Digite um usuário valido!");
      }
      
    }else{
      alert("Usuário já está cadastrado")
    }
    

  }

  verificaPessoa(nome: string) {

    for (var i = 0; i < this.alunos.length; i++) {

      if (nome == this.alunos[i].nome) {
        return false;
      }
      // more statements
    }

    return true;
  }


}
