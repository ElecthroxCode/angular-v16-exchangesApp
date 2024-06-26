import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConvertDivisasComponent } from './components/convert-divisas/convert-divisas.component';
import { ConvertUnitsComponent } from './components/convert-units/convert-units.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'divisas', component: ConvertDivisasComponent },
  { path: 'units', component: ConvertUnitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
