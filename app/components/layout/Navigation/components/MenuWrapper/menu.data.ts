import { IMenuWrapper } from '@/components/layout/Navigation/components/MenuWrapper/types.menu';

export const mainMenu: IMenuWrapper = {
  title: 'Menu',
  items: [
    {
      icon: 'MdHome',
      link: '/',
      title: 'Home',
    },
    {
      icon: 'MdExplore',
      link: '/genres',
      title: 'Discovery',
    },
    {
      icon: 'MdRefresh',
      link: '/fresh',
      title: 'Fresh movies',
    },
    {
      icon: 'MdLocalFireDepartment',
      link: '/trending',
      title: 'Trending now',
    },
  ],
};

export const userMenu: IMenuWrapper = {
  title: 'General',
  items: [],
};

export const menus: IMenuWrapper[] = [mainMenu, userMenu];
