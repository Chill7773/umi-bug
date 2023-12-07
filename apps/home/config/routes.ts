export default [
  {
    path: '/page-one',
    component: './one',
  },
  {
    path: '/page-two',
    component: './two',
  },
  {
    path: '/page-three',
    component: './three',
  },

  {
    path: '/',
    redirect: '/page-one',
  },
  {
    component: './404',
  },
];
