import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import Header from './pages/header/Header.jsx';
import Body from './pages/body/Body.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body />
  </StrictMode>,
)
