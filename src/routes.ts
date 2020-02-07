import { lazy } from 'react';

const HomeHub = lazy(() => import('./pages/homeHub/index'));
const Page = lazy(() => import('./pages/page2/index'));

const routes = [
  {
    path: '/',
    label: 'home',
    component: HomeHub,
    exact: true,
    order: 0
  },
  {
    path: '/pagetwo',
    label: 'pagetwo',
    component: Page,
    exact: true,
    order: 1
  }
];

export default routes;
