import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'',
    component:BackgroundComponent
  },
  {
    path:'city/:city',
    component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
