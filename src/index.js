import React from 'react';
import {render} from 'react-dom';


import Auth from './components/shared/Auth'
import App from './components/App';

render(
      <Auth>
        {App}
      </Auth>,
    document.getElementById('root')
)