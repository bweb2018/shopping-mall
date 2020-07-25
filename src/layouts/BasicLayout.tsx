import React, { useEffect } from 'react';
import { Location, connect, Dispatch } from 'umi';
import BottomNav from '@/components/BottomNav';
import '@/static/iconfont/iconfont.css';
import styles from './BasicLayout.less';

interface IBasicLayoutProps {
  location: Location;
  dispatch: Dispatch;
  user: any;
}

const BasicLayout: React.FC<IBasicLayoutProps> = props => {
  const { children, location, dispatch, user } = props;
  const { pathname } = location;
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrentUser',
      });
    }
  }, []);
  console.log('props：', props);

  return (
    <div className={styles.main}>
      <article>{children} </article>
      <footer>
        <BottomNav pathname={pathname} />
      </footer>
    </div>
  );
};

export default connect(({ user }) => ({ user }))(BasicLayout);
