import { NgModule, ChangeDetectionStrategy, Component } from '@angular/core';
import { PhoneFormatPipeModule } from '../../pipes/phone-format.pipe';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-phone-modal',
  templateUrl: './phone-modal.component.html',
  styleUrls: ['./phone-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneModalComponent {
  public get phone(): string {
    return this.config.data.phone;
  }
  constructor(
    public readonly config: DynamicDialogConfig,
    private readonly _dialogRef: DynamicDialogRef,
  ) {}
}

@NgModule({
  declarations: [PhoneModalComponent],
  exports: [PhoneModalComponent],
  imports: [DividerModule, PhoneFormatPipeModule],
})
export class PhoneModalComponentModule {}