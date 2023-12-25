import {ChangeEvent} from 'react';
import styles from './style.module.scss';

interface ThemeToggleProps {
  toggleTheme: (e: ChangeEvent<HTMLInputElement>) => void;
  theme: string;
}

function ThemeToggle({toggleTheme, theme}: ThemeToggleProps) {
  const items: {value: string; text: string}[] = [
    {value: 'light', text: 'Светлая'},
    {value: 'auto', text: 'Авто'},
    {value: 'dark', text: 'Тёмная'},
  ];

  return (
    <fieldset className={styles.toggle}>
      <span className={styles.title}>Тема:</span>
      <div className={styles.theme}>
        {items.map((item) => (
          <label key={item.value} className={styles.label}>
            <input
              className={styles.control}
              name="toggle"
              type="radio"
              value={item.value}
              checked={theme === item.value}
              onChange={toggleTheme}
            />
            <span className={styles.text}>{item.text}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default ThemeToggle;
