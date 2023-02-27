import * as React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './App';

const Button = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button style={{ display: 'block' }} className={theme}>
      {children}
    </button>
  );
};

export default Button;
