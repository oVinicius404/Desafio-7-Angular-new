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

  // Captura a referência do modal colocada no HTML (#meuModal)
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

  ngOnInit(): void {
    this.idIntervalo = setInterval(() => {
      this.proximo();
    }, 3000);
  }

  // Executa assim que a tela carrega totalmente, abrindo o modal
  ngAfterViewInit(): void {
    const modalBootstrap = new bootstrap.Modal(this.modalElement.nativeElement);
    modalBootstrap.show();
  }

  ngOnDestroy(): void {
    if (this.idIntervalo) {
      clearInterval(this.idIntervalo);
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
}