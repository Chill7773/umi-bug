import { defineConfig } from '@umijs/max';
import routes from './routes';

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
  base: '/',
  mfsu: false,
  routes,
  npmClient: 'pnpm',
  qiankun: {
    slave: {},
  },
});
