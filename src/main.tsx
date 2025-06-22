import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './shared/styles/reset.css';
import './shared/styles/index.css';
import './shared/styles/theme.css';
import './shared/styles/utility.css';
import './shared/styles/typography.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
