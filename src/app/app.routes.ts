import { Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProductComponent } from './pages/product/product';
import { RegisterComponent } from './pages/register/register';

export const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'inscription', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];
