import { Component, OnInit } from '@angular/core';

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

}
