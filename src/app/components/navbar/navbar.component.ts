import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.css',
})

export class NavbarComponent {
titre: string = 'BiblioApp';
  constructor(private router: Router) {}

retourAcceuil(): void {
  this.router.navigate(['/livres']).then(() => {
    window.location.reload();
  });
;
}
}
