import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import Header from './header/Header.jsx';
import Body from './body/Body.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body />
  </StrictMode>,
)
