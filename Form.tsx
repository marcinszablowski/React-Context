import * as React from 'react';
import Button from './Button';
import { useContext } from 'react';
import { ThemeContext } from './App';

const Form = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <form className={theme}>
        <h2>Form</h2>
        <Button>Submit</Button>
      </form>
      <button
        onClick={() =>
          setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
        }
      >{`Form: Change to ${theme === 'dark' ? 'light' : 'dark'}`}</button>
    </React.Fragment>
  );
};

export default Form;
