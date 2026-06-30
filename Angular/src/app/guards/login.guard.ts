import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID); // Captura se estamos no servidor ou navegador

  
  if (!isPlatformBrowser(platformId)) {
    return true; 
  }

  const nome = sessionStorage.getItem("nome");

  if (!nome) {
    alert("Usuário não autenticado.");
    router.navigate([""]);
    return false;
  }
  return true;
};