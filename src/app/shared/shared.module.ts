import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
// Destination for shared modules
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
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
    FooterComponent,
    HeaderComponent
  ]
})

export class SharedModule { }
