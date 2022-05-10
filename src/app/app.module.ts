import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickersComboComponent } from './pickers-combo/pickers-combo.component';
import { IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxComboModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxDropDownModule, IgxDialogModule, IgxSnackbarModule, IgxBannerModule, IgxNavbarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DialogsAndOverlaysComponent } from './dialogs-and-overlays/dialogs-and-overlays.component';

@NgModule({
  declarations: [
    AppComponent,
    PickersComboComponent,
    DialogsAndOverlaysComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxComboModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxDropDownModule,
    FormsModule,
    IgxDialogModule,
    IgxSnackbarModule,
    IgxBannerModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
