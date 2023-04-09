import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog'
import { DialogService } from 'primeng/dynamicdialog';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { LoginModalComponent } from '../../modals/login-modal/login-modal.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent {
  public readonly menuItems: MenuItem[] = [
    {
      label: 'Мои объявления',
      command: () => this.router.navigateByUrl('/my-ads'),
    },
    {
      label: 'Настройки',
      command: () => this.router.navigateByUrl('/settings'),
    },
    {
      label: 'Выйти',
      command: () => this.router.navigateByUrl(''),
      // command: () => this.authService.logout()
    },
  ];

  constructor(
    public readonly authService: AuthService,
    private readonly dialogService: DialogService,
    private readonly router: Router,
  ) {}

  showLoginDialog() {
    this.dialogService.open(LoginModalComponent, {
      header: 'Авторизация',
      style: {
        width: '416px',
      },
    });
  }
}

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [ButtonModule, AsyncPipe, NgIf, MenuModule, DialogModule],
  providers: [DialogService],
})
export class HeaderComponentModule {}