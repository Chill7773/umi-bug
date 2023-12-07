import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import { useEffect } from 'react';
import { history } from '@umijs/max';
import { message } from 'antd';

const HomePage: React.FC = () => {
  // 阻止用户跳转
  useEffect(() => {
    // 双向视频中，禁止页面跳转
    const unblock = history.block(({ location, retry }) => {
      if (location.pathname.includes('home')) {
        message.warn('不可切换到改页面');
        return '';
      }
      unblock();
      retry();
    });

    return () => {
      unblock();
    };
  }, []);
  return (
    <PageContainer ghost>
      <div className={styles.container}>页面一</div>
    </PageContainer>
  );
};

export default HomePage;
