import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AwardsComponent } from './awards.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { AwardsRoutingModule } from './awards-routing.module';
import { provideImgixLoader } from '@angular/common';



@NgModule({
  declarations: [ AwardsComponent ],
  exports: [ AwardsComponent ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    AwardsRoutingModule,
    NgOptimizedImage
  ],
  providers: [
    //provideImgixLoader('http://localhost:4200/assets/images/'),
    provideImgixLoader('https://github.com/lkovari/LKovariHome/blob/master/src/assets/images/'),
  ],
})
export class AwardsModule { }
