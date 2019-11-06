import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { IntegerValidatorDirective } from './input-integer/integer.validator.directive';
import { JoinPipe } from './pipes/join.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [InputIntegerComponent, IntegerValidatorDirective, JoinPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputIntegerComponent,
    IntegerValidatorDirective,
    JoinPipe,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatProgressBarModule,
    MatCardModule
  ],
  providers: [],
  entryComponents: []
})
export class SharedModule {}
