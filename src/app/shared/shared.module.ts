import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import {CdkTableModule} from '@angular/cdk/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    CdkTableModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule
  ]
})
export class SharedModule { }
