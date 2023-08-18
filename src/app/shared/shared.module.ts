import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
// Destination for shared modules
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    GalleriaModule,
  ],
  exports: [
    MenubarModule,
    CardModule,
    GalleriaModule,
  ]
})
export class SharedModule { }
