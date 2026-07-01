import { Component, inject, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgStyle, NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-menu',
  imports: [ReactiveFormsModule, NgStyle, NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit, OnDestroy, AfterViewInit {
  router = inject(Router);

  @ViewChild('meuModal') modalElement!: ElementRef;

  goToDashboard() {
    this.router.navigate(["/dashboard"])
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate([""])
  }

  imagens: string[] = [
    'img/imagem_1.jpeg',
    'img/imagem_2.jpeg',
    'img/imagem_3.jpg',
    'img/imagem_4.jpg',
    'img/imagem_5.jpeg',
    'img/imagem_6.jpeg',
    'img/imagem_7.jpeg',
    'img/imagem_8.jpeg'
  ];

  public indexAtual = 0;
  private idIntervalo: any;
  private idIntervalo1: any;
  private idIntervalo2: any;

  ngOnInit(): void {
    this.idIntervalo = setInterval(() => {
      this.proximo();
    }, 3000);

    this.idIntervalo1 = setInterval(() => {
      this.proximo1();
    }, 3000);

    this.idIntervalo2 = setInterval(() => {
      this.proximo2();
    }, 3000);
  }

  ngAfterViewInit(): void {
    const modalBootstrap = new bootstrap.Modal(this.modalElement.nativeElement);
    modalBootstrap.show();
  }

  ngOnDestroy(): void {
    if (this.idIntervalo) {
      clearInterval(this.idIntervalo);
    }
    if (this.idIntervalo1) {
      clearInterval(this.idIntervalo1);
    }
    if (this.idIntervalo2) {
      clearInterval(this.idIntervalo2);
    }

    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    document.body.classList.remove('modal-open');

    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }

  proximo() {
    if (this.indexAtual < this.imagens.length - 1) {
      this.indexAtual++;
    } else {
      this.indexAtual = 0;
    }
  }

  anterior() {
    if (this.indexAtual > 0) {
      this.indexAtual--;
    } else {
      this.indexAtual = this.imagens.length - 1;
    }
  }

  // --- DADOS DO CARROSSEL 2 (EXTRA) ---
  public indexAtual1 = 0;
  imagens1: string[] = [
    'img/imagem_1.jpeg',
    'img/imagem_2.jpeg',
    'img/imagem_3.jpg',
    'img/imagem_4.jpg',
  ];

  proximo1() {
    if (this.indexAtual1 < this.imagens1.length - 1) {
      this.indexAtual1++;
    } else {
      this.indexAtual1 = 0;
    }
  }

  anterior1() {
    if (this.indexAtual1 > 0) {
      this.indexAtual1--;
    } else {
      this.indexAtual1 = this.imagens1.length - 1;
    }
  }

  // --- DADOS DO CARROSSEL 3 (EXTRA 2) ---
  public indexAtual2 = 0; // Novo índice independente!
  imagens2: string[] = [
    'img/imagem_5.jpeg',
    'img/imagem_6.jpeg',
    'img/imagem_7.jpeg',
    'img/imagem_8.jpeg'
  ];

  proximo2() { // Nova função para o botão do terceiro carrossel
    if (this.indexAtual2 < this.imagens2.length - 1) {
      this.indexAtual2++;
    } else {
      this.indexAtual2 = 0;
    }
  }

  anterior2() { // Nova função para o botão do terceiro carrossel
    if (this.indexAtual2 > 0) {
      this.indexAtual2--;
    } else {
      this.indexAtual2 = this.imagens2.length - 1;
    }
  }
}