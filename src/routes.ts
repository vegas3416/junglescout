import { lazy } from 'react';

const HomeHub = lazy(() => import('./pages/homeHub/homeHub'));
const JobsPage = lazy(() => import('./pages/jobsPage/jobsPage'));
const CandidatesPage = lazy(() => import('./pages/candidatesPage/candidatesPage'));
const CampaignsPage = lazy(() => import('./pages/campaignsPage/campaignsPage'));
const AnalyticsPage = lazy(() => import('./pages/analyticsPage/analyticsPage'));
const CompanyPage = lazy(() => import('./pages/companyPage/companyPage'));
const ResourcesPage = lazy(() => import('./pages/resourcesPage/resourcesPage'));


const routes = [
  {
    path: '/',
    label: 'home',
    component: HomeHub,
    exact: true,
    order: 0
  },
  {
    path: '/jobs',
    label: 'jobs',
    component: JobsPage,
    exact: true,
    order: 1
  },
  {
    path: '/viewCandidates',
    label: 'candidates',
    component: CandidatesPage,
    exact: true,
    order: 2
  },
  {
    path: '/campaigns',
    label: 'campaigns',
    component: CampaignsPage,
    exact: true,
    order: 3
  },
  {
    path: '/analytics',
    label: 'analytics',
    component: AnalyticsPage,
    exact: true,
    order: 3
  },
  {
    path: '/company',
    label: 'company',
    component: CompanyPage,
    exact: true,
    order: 4
  },
  {
    path: '/resources',
    label: 'resources',
    component: ResourcesPage,
    exact: true,
    order: 5
  }
];

export default routes;
