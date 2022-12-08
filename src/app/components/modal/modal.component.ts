import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() name:string;
  @Input() noneHeader;
  @Output() closing = new EventEmitter();

  constructor(){ }

  ngOnInit(): void {
      if (!this.name) {
          console.error('Modal sem nome.');
          return;
      }
  }

  isShow = () => {
      return ModalService.check(this.name);
  }

  close = (): void => {
      ModalService.hide(this.name);
      this.closing.emit(true);
  }
}
