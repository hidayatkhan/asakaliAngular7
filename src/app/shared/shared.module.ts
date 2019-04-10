import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeNumberShortenPipe } from './large-number-shorten.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [LargeNumberShortenPipe],
  exports: [
    LargeNumberShortenPipe,
  ]

})
export class SharedModule { }
