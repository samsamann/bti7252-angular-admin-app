import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatListModule, MatInputModule, MatTableModule } from '@angular/material';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import {CdkTableModule} from '@angular/cdk/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    CdkTableModule,
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule
  ]
})
export class SharedModule { }
