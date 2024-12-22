import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { LayoutContentComponent } from './components/layout-content/layout-content.component';

import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faAward,
  faGlobe,
  faHome,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenubarModule } from 'primeng/menubar';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    RouterModule,
    FontAwesomeModule,
    SlideMenuModule,
    HeaderComponent,
    SidenavListComponent,
    LayoutContentComponent,
    ChecklistComponent,
],
    exports: [
    RouterModule,
    HeaderComponent,
    SidenavListComponent,
    FlexLayoutModule,
    LayoutContentComponent,
    MenubarModule,
    ChecklistComponent
],
    providers: [],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faHome, faPerson, faGlobe, faAward, faGithub);
  }
}
