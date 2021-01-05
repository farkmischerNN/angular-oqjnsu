import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { StudentPageModalComponent } from '../student-page-modal/student-page-modal.component';

const routes: Routes = [
  {
    path: '',
    component: StudentPageModalComponent,
  },
  {
    path: 'student',
    component: StudentPageModalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
  constructor() {
  }
}
