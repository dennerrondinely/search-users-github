import React from 'react';

import { Container } from './styles';
import iconPath, { Icons } from './icons';
import { Colors } from 'styles/colors';

export type IconProps = {
  size?: number | string;
  icon: Icons;
  color?: Colors;
};

const Icon = ({ icon, ...props }: IconProps) => (
  <Container
    xmlns="http://www.w3.org/2000/svg"
    viewBox={iconPath[icon].viewBox}
    {...props}
  >
    {iconPath[icon].path}
  </Container>
);

export default Icon;
