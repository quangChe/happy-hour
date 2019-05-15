import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreProvider from './store'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoreProvider><App/></StoreProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
