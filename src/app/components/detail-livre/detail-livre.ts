import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Livre } from '../../models/livre.model';
import { LivreService } from '../../services/livre';

@Component({
standalone: true,
imports: [CommonModule],
selector: 'app-detail-livre',
templateUrl: './detail-livre.html',
styleUrl: './detail-livre.css',
})
export class DetailLivre implements OnInit {
  livre: Livre | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private livreService: LivreService) {}
  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id')!;
  console.log('g')
  this.livreService.getLivreById(id).subscribe({
  next: (data) => this.livre = data,
  error: () => this.livre = null
  });
  }

  modifierDetail(id: string): void {
    this.router.navigate(['/modifier', id]).then(() => {
      window.location.reload();
    });
  ;
  }

  retourAcceuil(): void {
    this.router.navigate(['/livres']).then(() => {
      window.location.reload();
    });
  ;
  }
}
