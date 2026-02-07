import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'soual-navbar',
  imports: [ButtonModule, DrawerModule, RouterLink],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class NavbarComponent {
  menuOpen = false;
}
