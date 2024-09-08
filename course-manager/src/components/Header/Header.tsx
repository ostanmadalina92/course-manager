import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
export {}

const headerStyle: React.CSSProperties = {
display: 'flex',
flexDirection: 'row',
justifyContent: 'space-between',
margin: '20px'
  };

const Header: React.FC = () => {
  return (
    <header style={headerStyle} >
      <Logo />
      <Button buttonText="Logout" onClick={() => {}} />
    </header>
  );
};

export default Header;
