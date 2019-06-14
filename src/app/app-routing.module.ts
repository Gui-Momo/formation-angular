import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DictationComponent } from "./dictation/dictation.component";
import { ChildComponent } from "./child/child.component";
import { AdminChildComponent } from './admin-child/admin-child.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "dictation", component: DictationComponent },
  { path: "child", component: ChildComponent },
  { path: "child/:id", component: ChildComponent },
  { path: "admin", component: AdminChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
