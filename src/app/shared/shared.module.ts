import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Destination for shared modules
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    GalleriaModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    MenubarModule,
    CardModule,
    GalleriaModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})

export class SharedModule { }
