import { ElevationProps } from './Elevation.types';
import * as Styled from './Elevation.styles';

export const Elevation = ({ children, className }: ElevationProps) => {
  return <Styled.Elevation className={className}>{children}</Styled.Elevation>;
};
