import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule, MatFormFieldModule, MatInputModule, MatDatepickerModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
    
  
    
  ]
})

export class AngularMaterialModule {}