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
  // main主应用菜单栏暴露
  const headerContent = document.getElementsByClassName(
    'ant-layout-header ant-pro-fixed-header ant-pro-fixed-header-action',
  ) as HTMLCollectionOf<HTMLElement>;
  if (headerContent[0]) {
    headerContent[0].style.zIndex = '1000';
  }
  return {
    // 全局布局配置
    menu: {
      locale: false,
    },
    primaryColor: '#1890ff',
    layout: 'mix',
    pure: true,
    contentWidth: 'Fluid',
    headerTheme: 'light',
    navTheme: 'light',
    fixedHeader: false,
    fixSiderbar: true,
    colorWeak: false,
    siderWidth: 240,
    pwa: false,
    title: false,
    menuHeaderRender: false,
    disableContentMargin: false,
    contentStyle: { padding: 0 },
    headerRender: false,
    headerTitleRender: () => <div></div>,
    menuItemRender: (menuItemProps, defaultDom) => {
      return (
        <Link to={menuItemProps.path || ''}>
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
