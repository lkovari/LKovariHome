import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { LayoutContentComponent } from './components/layout-content/layout-content.component';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
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
import { ImageLazyLoadingDirective } from './directives/image-lazy-loading.directive';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent,
    LayoutContentComponent,
    ImageLazyLoadingDirective,
    ChecklistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    MatToolbarModule,
    RouterModule,
    FontAwesomeModule,
    SlideMenuModule,
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    SidenavListComponent,
    MaterialModule,
    FlexLayoutModule,
    LayoutContentComponent,
    SlideMenuModule,
    ImageLazyLoadingDirective,
    ChecklistComponent
  ],
  providers: [],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faHome, faPerson, faGlobe, faAward, faGithub);
  }
}
