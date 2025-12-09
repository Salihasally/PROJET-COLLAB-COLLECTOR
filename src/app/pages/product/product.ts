import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class ProductComponent {
  item: any = null;

  // copy same items list (or better : share a service). For now quick copy:
  items = [
    { id: 0, title: 'Ford Mustang Fastback 1967', photos: ["assets/photos/1.png","assets/photos/10.png","assets/photos/11.png"], price: 75000 },
    { id: 1, title: 'Tourne-disque Vinyle Retro', photos: ['assets/photos/2.png'], price: 120 },
    { id: 2, title: 'Téléphone Siemens Rouge Vintage', photos: ['assets/photos/3.png'], price: 90 },
    { id: 3, title: 'Miroir doré Art-Déco', photos: ['assets/photos/4.png'], price: 160 },
    { id: 4, title: 'Collier Perlé Élégance', photos: ['assets/photos/5.png'], price: 200 },
    { id: 5, title: 'Caméra Argentique Retro', photos: ['assets/photos/6.png'], price: 80 },
    { id: 6, title: 'Machine à écrire Collector', photos: ['assets/photos/7.png'], price: 150 },
    { id: 7, title: 'Horloge Vintage en Laiton', photos: ['assets/photos/8.png'], price: 110 },
    { id: 8, title: 'Vespa Jaune Rétro', photos: ['assets/photos/9.png'], price: 3500 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupération robuste de l'id
    this.route.paramMap.subscribe(pm => {
      const raw = pm.get('id');
      const id = raw !== null ? Number(raw) : NaN;
      if (!isNaN(id)) {
        this.item = this.items.find(it => it.id === id) || null;
      } else {
        this.item = null;
      }
    });
  }

  changeMainPhoto(photo: string) {
    if (this.item && this.item.photos) {
      this.item.photos[0] = photo;
    }
  }
}
