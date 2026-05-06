import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livre } from '../../models/livre.model';
import { LivreService } from '../../services/livre';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // pour [(ngModel)]


@Component({
  selector: 'app-liste-livres',
  standalone: true,
  imports: [CommonModule, FormsModule], // pour ngFor
  templateUrl: './liste-livres.component.html',
  styleUrl: './liste-livres.css',
})
export class ListeLivresComponent {

  livres: Livre[] = [];
isLoading: boolean = true;
erreur: string = '';
constructor(private livreService: LivreService, private router: Router) {}
ngOnInit(): void {
this.livreService.getLivres().subscribe({
next: (data) => {
this.livres = data;
this.isLoading = false;
},
error: (err) => {
this.erreur = 'Impossible de charger les livres. Vérifiez que json-server est démarré.';
this.isLoading = false;
}
});
}

supprimerLivre(id: string): void {
if (confirm('Supprimer ce livre définitivement ?')) {
this.livreService.supprimerLivre(id).subscribe(() => {
this.livres = this.livres.filter(l => l.id !== id);
window.location.reload();
});
}
}

voirDetail(id: string): void {
  this.router.navigate(['/livres', id]).then(() => {
    window.location.reload();
  });
;
}

modifierDetail(id: string): void {
  this.router.navigate(['/modifier', id]).then(() => {
    window.location.reload();
  });
;
}

recherche: string = '';

get livresFiltres(): Livre[] {
  const terme = (this.recherche || '').toLowerCase();

  return this.livres.filter(l =>
    l.titre?.toLowerCase().includes(terme) ||
    l.auteur?.toLowerCase().includes(terme)
  );
}

}
