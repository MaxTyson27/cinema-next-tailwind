import { TypeMaterialIconName } from '@/shared/types/icons-types';

export interface IMenu {
  icon: TypeMaterialIconName;
  title: string;
  link: string;
}

export interface IMenuWrapper {
  title: string;
  items: IMenu[];
}
