import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CurrencyFormatPipeModule } from '../../pipes/currency-format.pipe';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-advertisment-card',
  templateUrl: './advertisment-card.component.html',
  styleUrls: ['./advertisment-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertismentCardComponent {
  @Input() public ad: any | null = null;
}
@NgModule({
  declarations: [AdvertismentCardComponent],
  exports: [AdvertismentCardComponent],
  imports: [NgIf, RouterLink, SkeletonModule, CurrencyFormatPipeModule]
})
export class AdvertismentCardComponentModule {}