import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UaComponent } from 'src/app/components/ua/ua.component';
import { EnComponent } from 'src/app/components/en/en.component';

const routes: Routes = [
  { path: 'en', component: EnComponent },
  { path: 'ua', component: UaComponent },
  { path: '',   redirectTo: '/en', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
