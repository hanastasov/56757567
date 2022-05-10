import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { PickersComboComponent } from './pickers-combo/pickers-combo.component';
import { DialogsAndOverlaysComponent } from './dialogs-and-overlays/dialogs-and-overlays.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pickers-combo', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'pickers-combo', component: PickersComboComponent, data: { text: 'Pickers + Combo' } },
  { path: 'dialogs-and-overlays', component: DialogsAndOverlaysComponent, data: { text: 'Dialogs and overlays' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
