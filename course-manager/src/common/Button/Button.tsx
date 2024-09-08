import React from 'react';

export {}

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
}

const buttonStyle: React.CSSProperties = {
  background: '#007298',
  padding: '13px 36px',
  gap: '10px',
  color: 'white', 
  fontSize: '16px', 
  fontWeight: '500',
  border: 'none',
  borderRadius: '4px',
};

const Button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  return (
    <button style={buttonStyle} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
