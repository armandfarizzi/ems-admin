import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from '@/store/auth/auth.reducer';
import { authFeatureKey } from '@/store/auth/auth.selector';
import { IconModule } from '@/modules/icon.module';
import { AuthService } from '@/store/auth/auth.service';
import { ProductEffect } from '@/store/auth/auth.effect';
import { EffectsModule } from '@ngrx/effects';
import { NgxMaskDirective } from 'ngx-mask';

const routes: Routes = [
  { path: "", component: DashboardComponent }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  providers: [
    AuthService,
  ],
  imports: [
    CommonModule,
    NgxMaskDirective,
    FormsModule,
    IconModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(authFeatureKey, { auth: reducer }),
    EffectsModule.forFeature(ProductEffect),
  ]
})
export class HomeModule { }
