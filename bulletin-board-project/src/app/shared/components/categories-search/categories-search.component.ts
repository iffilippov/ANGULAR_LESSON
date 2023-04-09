import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-categories-search',
  templateUrl: './categories-search.component.html',
  styleUrls: ['./categories-search.component.scss'],  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSearchComponent {
  
}

@NgModule({
  declarations: [CategoriesSearchComponent],
  exports: [CategoriesSearchComponent],
  imports: [ButtonModule],
})
export class CategoriesSearchComponentModule {}