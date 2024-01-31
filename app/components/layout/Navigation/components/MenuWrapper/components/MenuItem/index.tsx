'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

import Link from 'next/link';
import { MaterialIcon } from '@/ui/MaterialIcon';

import { IMenu } from '@/components/layout/Navigation/components/MenuWrapper/types.menu';

import styles from '../../Menu.module.scss';

interface IMenuItemProps {
  item: IMenu;
}
const MenuItem: FC<IMenuItemProps> = ({
  item: { title, link, icon },
}) => {
  const pathname = usePathname();

  return (
    <li className={cn({ [styles.active]: pathname === link })}>
      <Link href={link}>
        <MaterialIcon name={icon} />
        <span>{title}</span>
      </Link>
    </li>
  );
};

export { MenuItem };
