export default [
  {
    path: '/page-one',
    component: './Home',
  },
  {
    path: '/page-two',
    component: './Home',
  },
  {
    path: '/page-three',
    component: './Home',
  },

  {
    path: '/',
    redirect: '/page-one',
  },
  {
    component: './404',
  },
];
