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
    slave: {},
  },
});
