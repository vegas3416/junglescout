import { lazy } from 'react';

const HomeHub = lazy(() => import('./pages/homeHub/homeHub'));
const JobsPage = lazy(() => import('./pages/jobsPage/jobsPage'));
const CandidatesPage = lazy(() => import('./pages/candidatesPage/candidatesPage'));
const CampaignsPage = lazy(() => import('./pages/campaignsPage/campaignsPage'));
const AnalyticsPage = lazy(() => import('./pages/analyticsPage/analyticsPage'));
const CompanyPage = lazy(() => import('./pages/companyPage/companyPage'));
const ResourcesPage = lazy(() => import('./pages/resourcesPage/resourcesPage'));
const ResumePage = lazy(() => import('./pages/resume/resume'));
const JobsTemplates = lazy(() => import ('./pages/jobsTemplates/jobsTemplates'));
const CreateJobTemplate = lazy(() => import('./pages/createJobTemplate/createJobTemplate'));

const routes = [
  {
    path: '/',
    label: 'home',
    component: HomeHub,
    exact: true
  },
  {
    path: '/jobs',
    label: 'jobs',
    component: JobsPage,
    exact: true
  },
  {
    path: '/jobs/jobsTemplates',
    label: 'jobs',
    component: JobsTemplates,
    exact: true
  },{
    path: '/jobs/jobsTemplates/createJobTemplate',
    label: 'jobs',
    component: CreateJobTemplate,
    exact: true
  },
  {
    path: '/viewCandidates',
    label: 'candidates',
    component: CandidatesPage,
    exact: true
    
  },
  {
    path: '/campaigns',
    label: 'campaigns',
    component: CampaignsPage,
    exact: true
  },
  {
    path: '/analytics',
    label: 'analytics',
    component: AnalyticsPage,
    exact: true
  },
  {
    path: '/company',
    label: 'company',
    component: CompanyPage,
    exact: true
  },
  {
    path: '/resources',
    label: 'resources',
    component: ResourcesPage,
    exact: true
  },
  {
    path: '/resume',
    label: 'resume',
    component: ResumePage,
    exact: true
  }
];

export default routes;
