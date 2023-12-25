import {useLayoutEffect, useState} from 'react';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

function useTheme() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('app-theme') || 'auto',
  );

  useLayoutEffect(() => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-theme', defaultTheme);
      localStorage.removeItem('app-theme');
    }

    if (theme !== 'auto') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('app-theme', theme);
    }
  }, [theme]);

  return {theme, setTheme};
}

export default useTheme;
