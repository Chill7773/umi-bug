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
    },
    primaryColor: '#1890ff',
    theme: 'light',
    layout: 'mix',
    pure: true,
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
      console.log(menuItemProps);
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
