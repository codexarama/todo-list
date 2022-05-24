import { createContext, useState, useEffect } from 'react';

export const themes = {
  add: '',
  update: 'update_bg',
};

export const ThemeContext = createContext({
  theme: themes.add,
  changeTheme: () => {},
});

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState(themes.add);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.update:
        document.body.classList.replace('add_bg', 'update_bg');
        break;
      case themes.add:
      default:
        document.body.classList.replace('update_bg', 'add_bg');
        break;
    }
  }, [theme]);

  const value = {
    theme: theme,
    changeTheme: changeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}
