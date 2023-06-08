import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, NgIconsModule } from '@ng-icons/core';
import { featherBriefcase, featherStar, featherHome } from "@ng-icons/feather-icons";

@NgModule({
  declarations: [],
  exports: [
    NgIconComponent,
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ featherBriefcase, featherStar, featherHome }),
  ]
})
export class IconModule { }
