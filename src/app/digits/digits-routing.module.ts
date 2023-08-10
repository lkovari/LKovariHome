import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DigitsGameComponent } from "./digits-game.component";

const routes: Routes = [
    { path: 'digits/digits-game', component: DigitsGameComponent }
];
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class DigitsRoutingModule { }