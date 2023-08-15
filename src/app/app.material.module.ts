import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

let modules = [
  MatSidenavModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatStepperModule,
  MatNativeDateModule,
  MatInputModule,
  MatDatepickerModule,
  MatTableModule,
  MatDialogModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatTooltipModule,
  MatMenuModule
]

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule { }