import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  @Input() message: string;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  public decline() {
    this.activeModal.close(false);
  }

  public delete() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }


}
