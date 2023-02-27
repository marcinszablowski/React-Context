import * as React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './App';

const Button = ({ children, className, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button className={`${className} ${theme}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
