export default [
  {
    path: '/user/login',
    layout: false,
    name: 'login',
  },
  {
    path: '/audit',
    name: '审核管理',
    icon: 'audit',
    routes: [
      {
        path: '/audit',
        redirect: '/audit/homepage',
      },
      {
        name: '我的首页',
        path: '/audit/homepage',
        icon: 'home',
        component: './Home',
      },
      {
        name: '审核任务',
        path: '/audit/reviewtasks',
        component: './Home',
      },
      { component: './404' },
    ],
  },
  // 微前端断点管理
  {
    path: '/system/*',
    name: '系统管理',
    icon: 'menu',
    microApp: 'system',
  },

  {
    path: '/',
    redirect: '/audit',
  },
  { path: '/*', component: './404' },
];
