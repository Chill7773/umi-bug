export default [
  {
    path: '/account',
    name: 'account',
    icon: 'creditCard',
    component: './Home',
  },
  {
    path: '/role',
    name: 'role',
    icon: 'team',
    component: './Home',
  },
  {
    path: '/block',
    name: 'block',
    icon: 'team',
    component: './Home',
  },

  {
    path: '/',
    redirect: '/account',
  },

  {
    component: './404',
  },
];
