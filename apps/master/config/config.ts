import { defineConfig } from '@umijs/max';
import routes from './routes';
const { NODE_ENV } = process.env;

export default defineConfig({
  hash: true,
  history: { type: 'hash' },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    locale: false,
  },
  mfsu: false,
  routes,
  publicPath: NODE_ENV === 'production' ? './' : '/',
  base: '/',
  npmClient: 'pnpm',
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'home', // 唯一 id

          entry: '//localhost:7060/#/',
        },
        {
          name: 'system', // 唯一 id
          entry: '//localhost:7070/#/',
        },
      ],
    },
  },
});
