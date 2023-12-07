/**
 * @file 运行时配置
 */

import { RunTimeLayoutConfig } from '@umijs/max';
import { Link } from '@umijs/max';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    // 全局布局配置
    menu: {
      locale: false,
      request: async () => {
        return [
          {
            path: '/home',
            name: '首页',
            children: [
              {
                path: '/home/page-one',
                name: '首页-页面一',
              },
              {
                path: '/home/page-two',
                name: '首页-页面二',
              },
              {
                path: '/home/page-three',
                name: '首页-页面三',
              },
            ],
          },
          {
            path: '/system',
            name: '系统管理',
            children: [
              {
                path: '/system/page-one',
                name: '页面一',
              },
              {
                path: '/system/page-two',
                name: '页面二',
              },
              {
                path: '/system/page-three',
                name: '页面三',
              },
            ],
          },
        ];
      },
    },
    primaryColor: '#1890ff',
    theme: 'light',
    layout: 'mix',
    splitMenus: true,
    contentWidth: 'Fluid',
    headerTheme: 'light',
    navTheme: 'light',
    fixedHeader: true,
    fixSiderbar: true,
    colorWeak: false,
    siderWidth: 240,
    title: 'main',
    pwa: false,
    menuItemRender: (menuItemProps, defaultDom) => {
      return (
        <Link to={menuItemProps.path?.replace(/\/$/, '') || ''}>
          {menuItemProps.pro_layout_parentKeys &&
            menuItemProps.pro_layout_parentKeys.length > 1 &&
            menuItemProps.icon}
          {defaultDom}
        </Link>
      );
    },

    footerRender: false,
  };
};
