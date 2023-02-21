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
    path: '/channel',
    name: 'channel',
    icon: 'api',

    component: './Home',
  },
  {
    path: '/channel/detail',
    name: 'detail',
    component: './Home',

    hideInMenu: true,
  },
  {
    path: '/department',
    name: 'department',
    icon: 'group',

    component: './Home',
  },
  {
    path: '/department/add',
    name: 'add',
    component: './Home',

    hideInMenu: true,
  },
  {
    path: '/recommendation',
    name: 'recommendation',
    icon: 'qrcode',

    component: './Home',
  },
  {
    path: '/template',
    name: 'template',
    icon: 'comment',

    component: './Home',
  },
  {
    path: '/menu',
    name: 'menuManage',
    icon: 'menu',
    component: './Home',
  },
  {
    path: '/email',
    name: 'email',
    icon: 'mail',
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
