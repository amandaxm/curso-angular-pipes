import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  filtro: string='';
  livro: any = {
    titulo: 'O livro',
    rating: 4.8979,
    nPaginas: 600,
    dataLancamento: new Date(2016, 5, 23),
    preco:34,
    url: 'https://www.saraiva.com.br/'
  };

  livros: string[]=['Java', 'Angular 2'];
  constructor() { }

  ngOnInit(): void {
  }
  addCurso(valor) {
    this.livros.push(valor);
   // console.log(this.livros);
  }
 
  obterCursos(){
    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === '') {
        return this.livros;
      }
      return this.livros.filter(
        v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
     );
  }

  valorAsync= new Promise((resolve,reject)=>{
    //para demorar um pouco
    /* vai atribuir a valorAsync depois de 2 segundos 
    a string ValorAssincrono */
    setTimeout(()=>resolve('Valor assíncrono'),2000)

  });
  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));


}
