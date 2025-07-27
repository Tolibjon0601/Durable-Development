import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import(
            '../modules/dashboard/components/dashboard/dashboard.component'
          ).then((m) => m.DashboardComponent),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../modules/products/products.routes').then((m) => m.default),
      },

      {
        path: 'price',
        loadChildren: () =>
          import('../modules/price/price.routes').then(
            (m) => m.default
          ),
      },

      {
        path: 'contact',
        loadChildren: () =>
          import('../modules/contact/contact.routes').then((m) => m.default),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('../modules/services/service.routes').then((m) => m.default),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../modules/about/about.routes').then((m) => m.default),
      },

      {
        path: 'service-detail',
        loadChildren: () =>
          import('../modules/service-detail/service-detail.routes').then((m) => m.default),
      },
      {
        path: 'branches',
        loadChildren: () =>
          import('../modules/branches/branches.routes').then((m) => m.default),
      },
    ],
  },
];

export default routes;
