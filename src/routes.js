import {lazy} from 'react';

const Trending = lazy(() =>
    import('./components/Trending' /* webpackChunkName: "home-page" */)
);
const Details = lazy(() =>
    import('./components/MovieDetails' /* webpackChunkName: "content-page" */)
);
const Movies = lazy(() =>
  import(
    './components/Movies' /* webpackChunkName: "user-details-page" */
  ),
);
// const HomeWorks = lazy(() =>
//   import('./components/HomeWorks' /* webpackChunkName: "home-work-page" */),
// );
// const About = lazy(() =>
//   import('./components/About' /* webpackChunkName: "about-page" */),
// );

export default [
    {
        path: '/',
        label: 'Home',
        isExact: true,
        isInMenu: true,
        component: Trending,
    },
    {
        path: '/movies',
        label: 'Movies',
        isExact: true,
        isInMenu: true,
        component: Movies,
    },
    {
        path: '/movies/:id',
        label: 'None',
        isExact: true,
        isInMenu: false,
        component: Details,
    },
    // {
    //   path: '/home-works',
    //   label: 'Home Works',
    //   isExact: false,
    //   isInMenu: true,
    //   component: HomeWorks,
    // },
    // {
    //   path: '/about',
    //   label: 'About',
    //   isExact: false,
    //   isInMenu: true,
    //   component: About,
    // },
    // {
    //   path: '/users/:userId',
    //   label: 'User Details',
    //   isExact: false,
    //   isInMenu: false,
    //   component: UserDetails,
    // },
];
