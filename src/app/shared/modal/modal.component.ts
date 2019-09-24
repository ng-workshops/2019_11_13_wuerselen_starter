import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalData } from './modal.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input()
  modal: ModalData;

  @Output()
  close = new EventEmitter();

  @Output()
  cancel = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
