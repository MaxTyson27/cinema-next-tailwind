import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';
import { TypeMaterialIconName } from '@/shared/types/icons-types';

interface IMaterialIconProps {
  name: TypeMaterialIconName;
}

const MaterialIcon: FC<IMaterialIconProps> = ({ name }) => {
  const IconComponent = MaterialIcons[name];

  return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
};

export { MaterialIcon };
