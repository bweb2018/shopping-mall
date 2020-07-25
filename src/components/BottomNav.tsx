import React from 'react';
import { TabBar } from 'antd-mobile';
import { history } from 'umi';

const menu = [
  {
    title: 'home',
    link: '/',
    icon: 'home',
  },
  {
    title: 'cart',
    link: '/cart',
    icon: 'cart',
  },
  {
    title: 'order',
    link: '/olist',
    icon: 'reorder',
  },
  {
    title: 'user',
    link: '/user',
    icon: 'user',
  },
];
interface BottomNav {
  pathname: string;
}
function BottomNav(props: BottomNav) {
  const { pathname } = props;
  return (
    <div>
      <TabBar tintColor="red">
        {menu.map(({ title, link, icon }) => (
          <TabBar.Item
            key={link}
            title={title}
            icon={<span className={`iconfont icon-${icon}`}></span>}
            selectedIcon={<span className={`red iconfont icon-${icon}`}></span>}
            selected={pathname === link}
            onPress={() => {
              history.push(link);
            }}
          />
        ))}
      </TabBar>
    </div>
  );
}

export default BottomNav;
