import * as React from 'react';
import { createContext, useState } from 'react';
import './style.css';
import Form from './Form';

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <p style={{ textAlign: 'right' }}>
          {theme === 'dark' ? '🌛 Dark' : '🌞 Light'} mode
        </p>
        <Form />
      </div>
      <button
        onClick={() =>
          setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
        }
      >{`App: Change to ${theme === 'dark' ? 'light' : 'dark'}`}</button>
    </ThemeContext.Provider>
  );
}
