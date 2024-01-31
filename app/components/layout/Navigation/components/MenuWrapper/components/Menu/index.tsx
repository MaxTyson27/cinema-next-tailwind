import { FC } from 'react';

import { MenuItem } from '@/components/layout/Navigation/components/MenuWrapper/components/MenuItem';

import { IMenuWrapper } from '@/components/layout/Navigation/components/MenuWrapper/types.menu';

import styles from '../../Menu.module.scss';

const Menu: FC<IMenuWrapper> = ({ title, items }) => {
  const menuItemElems = items.map(item => (
    <MenuItem item={item} key={item.link} />
  ));

  return (
    <div className={styles.menu}>
      <div className={styles.heading}>{title}</div>
      <ul className={styles.list}>{menuItemElems}</ul>
    </div>
  );
};

export { Menu };
