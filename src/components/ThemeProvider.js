import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from './common/ProgressBar';

export default function ThemeProvider({ children }) {
  const theme = useSelector(state => state.settings.theme);
  const mode = useSelector(state => state.settings.mode);

  return <div className={`${mode} theme-${theme}`}>{children}</div>;
}

/* progress bar library uses partial strings instead of css classes, so it has to be themed manually */
const PROGRESS_BAR = {
  tl: 'linear-gradient(to right, #649044, #a4ce27)',
  tb: 'linear-gradient(to right, #634228, #e5d993)',
  sl: 'linear-gradient(to right, #008076, #21eca5)',
  mono: 'linear-gradient(to right, #f9fafb, #374151)',
};

export function ThemedProgressBar(props) {
  const theme = useSelector(state => state.settings.theme);
  return <ProgressBar {...props} backgroundColor={PROGRESS_BAR[theme.split('-')[0]]} />;
}
