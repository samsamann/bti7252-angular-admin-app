import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatSlideToggleModule,
    RouterModule
  ],
  exports: [
    CdkTableModule,
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatSlideToggleModule,
    RouterModule
  ]
})
export class SharedModule { }
