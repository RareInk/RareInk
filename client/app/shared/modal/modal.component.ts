import { Component, OnInit, Directive, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'rareink-ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}

@Directive({
  selector: 'rareink-modal-header, rareink-modal-body' // tslint:disable-line
})
export class ModalDirectivesDirective {}
