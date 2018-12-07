import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatNativeDateModule, MatIconModule, MatListModule, MatInputModule, MatTableModule, MatToolbarModule,  MatSelectModule
} from '@angular/material';
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
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule,
    MatSelectModule
  ],
  exports: [
    CdkTableModule,
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule,
    MatSelectModule
  ]
})
export class SharedModule { }
