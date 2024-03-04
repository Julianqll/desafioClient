import React, { ReactNode } from 'react';
import { CollapseDesktop } from '../components/CollapseDesktop/CollapseDesktop';

interface LayoutProps {
  children: ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CollapseDesktop>
      {children}
    </CollapseDesktop>
  );
};

export default Layout;
