import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularNewsRoutingModule } from './angular-news-routing.module';
import { AngularNewsComponent } from './angular-news.component';
import { SharedModule } from "../shared/shared.module";
//import { LayoutContentComponent } from '../shared/components/layout-content/layout-content.component';
//import { SidenavListComponent } from '../shared/components/sidenav-list/sidenav-list.component';
//import { HeaderComponent } from '../shared/components/header/header.component';


@NgModule({
    declarations: [AngularNewsComponent],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MaterialModule,
        FlexLayoutModule,
        SharedModule
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AngularNewsRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        SharedModule
    ]
})
export class AngularNewsModule { }
