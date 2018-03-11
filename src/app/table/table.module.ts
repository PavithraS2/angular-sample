import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { DataTableModule } from "angular2-datatable";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule,
    HttpModule
  ],
  declarations: [TableComponent, FilterPipe],
  exports: [TableComponent]
})
export class TableModule { }
