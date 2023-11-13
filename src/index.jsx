import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as S from './App.Styles';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <S.GlobalStyled/>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);

