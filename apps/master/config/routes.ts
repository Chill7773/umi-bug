export default [
  {
    path: '/home/*',
    name: '审核管理',
    icon: 'home',
    microApp: 'home',
  },
  {
    path: '/system/*',
    name: '系统管理',
    icon: 'menu',
    microApp: 'system',
  },

  {
    path: '/',
    redirect: '/home',
  },
  { path: '/*', component: './404' },
];
