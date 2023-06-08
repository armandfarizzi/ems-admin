import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from '@/store/auth/auth.reducer';
import { authFeatureKey } from '@/store/auth/auth.selector';
import { IconModule } from '@/modules/icon.module';

const routes: Routes = [
  { path: "", component: DashboardComponent }
];


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({}),
    IconModule,
    StoreModule.forFeature(authFeatureKey, { auth: reducer }),
    StoreDevtoolsModule.instrument({
      name: "NgRx Immer",
    })
  ]
})
export class HomeModule { }
