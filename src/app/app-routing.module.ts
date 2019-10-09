import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'add-entrega', loadChildren: './pages/add-entrega/add-entrega.module#AddEntregaPageModule' },
  { path: 'list-entrega', loadChildren: './pages/list-entrega/list-entrega.module#ListEntregaPageModule' },
  { path: 'perfil-entrega', loadChildren: './pages/perfil-entrega/perfil-entrega.module#PerfilEntregaPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
